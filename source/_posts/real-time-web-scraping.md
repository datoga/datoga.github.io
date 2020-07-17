---
title: Real-time web scraping, a new world to explore
date: 2020-07-12 17:00:00
tags: web scraping, real-time
---

You can find tons of information on the Internet about [web scraping](https://en.wikipedia.org/wiki/Web_scraping). Web scraping is a quite old technique used to extract information from websites.

But, are not APIs intended to do this? Well, yes, of course, but sadly APIs are not everywhere. Indeed, the most typical situation will be a website with interesting information, which is meant to be human-readable, and it lacks an API to access the information directly from source code.

<!-- more -->

Scraping the website, you can extract the information you need, parsing the website and making it machine-readable and allowing to interact and analyse the information of the website.

There are a lot of tools to scrape websites, but they are _slow_. For example, there are a lot of [powerful libraries](https://realpython.com/beautiful-soup-web-scraper-python) in Python. You tipically don't need real-time information so we are fine.

But, what happens if you need real-time information? For example, you need to get stock information, betting quotes, flight prices, park spaces, etc. They all have one characteristic in common: they change, and change quickly!

In all these cases you have to apply different sophisticated techniques in order to get updated information. Of course, the performance in this case is a key feature you cannot forget.

In the next articles I will research about this problem, trying to find out:

- The time that is needed in each step when you scrape a website, identifying where are the bottlenecks.
  
- The best framework to scrape real-time information. I will consider Python, Golang, Rust and plain curl, making comparisons between them.

- The list of problems & optimizations that should be done in order to avoid those issues.

- A good architecture to support information from multiple sources. This could not be important in stock prices (the stock price is universal) but is relevant for example on betting quotes, where each betting house has different quotes on the same event.

Follow me on [LinkedIn](https://www.linkedin.com/in/datoga/).
