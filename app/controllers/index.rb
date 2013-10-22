get '/' do
  erb :index
end

post '/sendtweet' do
  Twitter.update(params[:theTweet])
  "<h3>SUCCESS!!</h3>"
end