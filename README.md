# TL;DR Slash Command for Mixmax

This Mixmax Slash commands allows you to easily summarize web articles, blog posts and long text.

## Usage

Type `/tldr` followed by an URL or a long text that you want summarized.

![Example](https://i.gyazo.com/726b3046360c875387b02b4ec068942f.gif)
![Example](https://i.gyazo.com/16ac4f0afcf203d2b395d1a5f2bffc6c.gif)

## Mixmax integration setup

1. Go to the Mixmax dashboard
2. Go to settings
3. Go to integrations
4. Click "Add a Slash command"
5. Insert the following values:

![Mixmax settings](http://i.imgur.com/2ndCBns.png)

*Note* Since this demo is not using a valid SSL certificate, you will first need to accept it. Go to https://45.55.247.103/ and accept the self-signed certificate. Otherwise, CORS over SSL will not work.

## Running locally

1. Install using `npm install`
2. Get a [smmry.com](http://smmry.com/partner) API KEY
3. Set the SM_API_KEY environment variable to your API KEY.
4. Run using `npm start`

To simulate locally how Mixmax calls the resolver URL (to return HTML that goes into the email), navigate to 

[http://localhost:9145/resolver?text=https://mixmax.com/blog/requiring-node-builtins-with-webpack](http://localhost:9145/resolver?text=https://mixmax.com/blog/requiring-node-builtins-with-webpack)
