class Api::V1::PostsController < ApplicationController
    before_action :protected_action, only: [:create]

    def create
        post = Post.new(post_params)
        post.user = @current_user

        if post.save
            render json: post
        else
            render json: { errors: post.errors.full_messages }, status: :unauthorized
        end
    end

    def show
        post = Post.find(params[:id])
        render json: post
    end

    def index
        posts = Post.all

        render json: posts, each_serializer: PostSummarySerializer 
    end

    private 

    def post_params
        params.require(:post).permit(:title, :content)
    end
end
