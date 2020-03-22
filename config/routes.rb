Rails.application.routes.draw do
  # auth via sms
  get '/login', to: 'sessions#new'
  # post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
  post '/login_by_sms', to:'sessions#create_by_sms'

  post '/api/confirm', to: 'registrations#create'

  # api
  get '/api/current_contact', to: 'api#get_current_contact'

  root 'frontend#index'
  get '/*other', to: 'frontend#index'
end
