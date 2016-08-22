# TL;DR Slash Command for Mixmax

This Mixmax Slash commands allows you to easily summarize long emails or linked web pages.

## Running locally

1. Install using `npm install`
2. Get a [smmry.com](http://smmry.com/partner) API KEY
3. Set the SM_API_KEY environment variable to your API KEY.
4. Run using `npm start`

To simulate locally how Mixmax calls the resolver URL (to return HTML that goes into the email), navigate to 

http://localhost:9145/resolver?text=https://mixmax.com/blog/requiring-node-builtins-with-webpack
