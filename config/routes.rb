Rails.application.routes.draw do
  root 'frontend#index'
  get '/*other', to: 'frontend#index'
end
