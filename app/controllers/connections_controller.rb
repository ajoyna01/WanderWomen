class ConnectionsController < ApplicationController
  def index
    connections = Connection.all
    render json: users
  end
end


