Rails.application.routes.draw do


  # auth via sms
  get '/login' => 'sessions#new'
  # post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
  post '/login_by_sms' => 'sessions#create_by_sms'


  # api
  get  '/api/current_contact' => 'api#get_current_contact'



  root 'frontend#index'
  get '/*other', to: 'frontend#index'
end
