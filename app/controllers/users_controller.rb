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
    def show
        render json: @current_user , status: :created
    end
    private
    def user_params
        params.permit(:first_name,:username,:password,:password_confirmation, :age, :city, :state, :zip_code, :email, :image_url,:bio, :camp_type)
    end
end
