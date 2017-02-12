class PayController < ApplicationController
  def show
    render template: "pay/#{params[:page]}"
    require "stripe"
		Stripe.api_key = ENV["stripe_secret_key"]
		Stripe::Charge.retrieve(:id => "ch_17drCC2eZvKYlo2CWLQQPJMF", :expand => ['customer'])
  end
  
  def create
      Stripe.api_key = ENV["stripe_secret_key"]
      token = params[:stripeToken]
      @fname = params[:fname]
      @email = params[:email]
      @amount = params[:amount]
      @description = params[:description]
      amount = params[:amount].to_i
      amount_cents = (amount * 100)

      # Make the charge
      charge = Stripe::Charge.create(
        :amount => amount_cents, # amount in cents
        :currency => "USD",
        :card => token,
        :description => @description,
      )
  end
  
end