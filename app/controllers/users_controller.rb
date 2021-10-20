class UsersController < ApplicationController
skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user , status: :created
    end
    def index
        users = User.all
        render json: users
    end
    def me
        render json:@current_user, status: :created
    end 
    def show
        render json:@current_user, status: :created
    end
    def destroy
        user = @current_user.find_by(id: params[:id])
        user.destroy
        head :no_content
    end
   def update 

        user_to_update = @current_user
    
        if user_to_update
            if user_to_update.update(update_user_params)
                render json: user_to_update
            elsif user_to_update.errors
                render json: { error: user_to_update.errors.full_messages }
            end
         
        end

        
    end
    # def show
    #     render json: @current_user , status: :created
    #     @user = User.find(params[:id])
    #     @followers = @user.followers
    #     @followees = @user.followees
    #     @not_following = @user.not_following
    # end
    
    private
    def user_params
        params.permit(:first_name,:username,:password,:password_confirmation, :age, :city, :state, :zip_code, :email, :image_url,:bio, :camp_type)
    end
    def update_user_params
        params.permit(:first_name,:username,:password, :age, :city, :state, :zip_code, :email, :image_url, :bio, :camp_type)
    end
end
