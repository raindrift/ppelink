# README

Coordinating PPE distribution from organizations that have it to hospitals that need it.

## Setting up your local dev environment

First, install postgres:

    brew install postgres

Start postgres:

    postgres -D /usr/local/var/postgres

Then initialize the database, begining with

    createdb
    psql

in the postgres console:

    create role ppelink with createdb login;

then you can exit that shell with ^D

back in the shell, install rbenv (if not already installed)

    brew install rbenv

Set up rbenv in your shell

    rbenv init

  Add `eval "$(rbenv init -)"` to you bash profile

Use rbenv to install a ruby that your OS isn't using

    rbenv install 2.6.5

Gem time!

    bundle install

Install javascript dependencies

    brew install yarn  # if you haven't already
    yarn install

You may need to install `charlock_holmes`

    gem install charlock_holmes

Initialize the db

    rake db:create db:migrate

## .env
To make the app work, you will need a `.env` file with all the development settings. Variables that go in there are:

    TWILIO_ACCOUNT_SID
    TWILIO_AUTH_TOKEN
    MAIN_NUMBER


## Starting the server
* `./bin/webpack-dev-server`
* `rails s`

If you get a segfault in `sassc`, just try again. It seems to be an asset compilation issue, but it works on the second try.
