<p align="center">🚧 FeedFrame is still a work in progress 🚧</p>

# FeedFrame

A serverless platform to aggregate data into a single feed or dashboard view.

## About

As a user or organization, we have data spread across different services and teams. To increase visibility, it would be great if this information was located in one place. Or maybe you just want to have a high level overview of your own personal data from any online services you use. FeedFrame aims to provide all of this content in either a dashboard or chronological feed from any data source that provides an API to access your data.

### Modes

FeedFrame will have either a dashboard or a feed mode.

##### Feed

Feed mode will display content from all sources in an aggregate timeline from all configured data sources. There will be controls to filter out content from various sources.

##### Dashboard

Dashboard mode will display a flexible grid layout of various data sources. Each panel in a dashboard view will show the latest content available from each data source configured. Multiple board layouts can be configured to show this data which can cycle through.

Some dashboard mode data sources may be configured to also show a feed of data but initially the feed of data will be isolated to a single data source, not an aggregate like feed mode.

### Serverless

FeedFrame aims to be serverless. Content will come directly from API sources and be displayed in the client. This should make it easy to deploy on services like [Heroku](https://www.heroku.com/), [Now](https://zeit.co/now), or [Netlify](https://www.netlify.com/). For higher traffic deployments it may make sense at some point to add a caching layer for better performance and to prevent potential issues with rate limiting from API sources. Initially a caching layer is out of scope for FeedFrame.

## Getting Started

Right now there is not any "Getting Started" or install guide. If you would like to help or are interested, reach out for more info. This document will be updated as more progress is made if anyone is interested in contributing.

## Progress

For now while FeedFrame is still in a POC phase, [there is a GitHub project for tracking what needs to be done](https://github.com/feedframe/feedframe/projects/1).