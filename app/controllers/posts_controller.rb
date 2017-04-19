class PostsController < ApplicationController


    def count
        session[:count] = params[:count]
        render json: {currentCount: session[:count]}, status: 200
    end

    def getCount
        render json: {currentCount: session[:count]}
    end

    def resetCounter
        session[:count] = 0
        render json: {currentCount: session[:count]}
    end

    def show
    end



end
