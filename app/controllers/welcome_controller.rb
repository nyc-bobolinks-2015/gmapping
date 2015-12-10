class WelcomeController < ApplicationController
  include HTTParty
  def index

  end

  def search
    search_term = URI.escape(params[:term])
    p search_term
    @response = HTTParty.get("http://maps.googleapis.com/maps/api/geocode/json?address=#{search_term}")
    render json: @response
  end
end
