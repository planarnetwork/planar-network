---
title: Data feeds
description: Rail, bus and airline industry data converted to GTFS.
layout: post
image: /assets/img/feeds.png
---

Planar Network maintain a [number of tools](https://www.github.com/planarnetwork) for converting various industry standards to GTFS. Where possible we maintain a public version of the feed itself on [transitfeeds.com](http://transitfeeds.com).
{: .article-headline}

## Rail

Data is supplied and licensed by [Rail Delivery Group](https://www.raildeliverygroup.com/) and is available directly through their [data portal](http://data.atoc.org/).

Download the latest GTFS feed: [gb-rail-latest.zip](https://s3.eu-west-2.amazonaws.com/feeds.planar.network/gb-rail-latest.zip)

## Bus

Coming soon.

## Flights

We have an [open source tool](https://github.com/planarnetwork/ssim2gtfs) to convert SSIM flight schedules to GTFS but no data with a license to public the data in GTFS format. If you would like us to host any feeds please [get in touch](mailto:info@planar.network).

## Tools

All tools are open source (licensed under GPLv3) and are available on [github](https://www.github.com/planarnetwork):

- [dtd2mysql](https://www.github.com/planarnetwork/dtd2mysql) - converts UK rail [CIF](https://www.raildeliverygroup.com/files/Publications/services/rsp/RSPS5046-01-00_Timetable_Information_Data_Feed_InterfaceSpecification.pdf) format to GTFS
- [transxchange2gtfs](https://www.github.com/planarnetwork/transxchange2gtfs) - converts UK bus data ([TransXChange](https://www.gov.uk/government/collections/transxchange)) to GTFS
- [ssim2gtfs](https://www.github.com/planarnetwork/ssim2gtfs) - converts [IATA SSIM](https://www.iata.org/publications/store/Pages/standard-schedules-information.aspx) format to GTFS
- [cuf2gtfs](https://www.github.com/planarnetwork/cuf2gtfs) - converts TfL London Underground schedules ([CUF](http://content.tfl.gov.uk/cuf-technical-spec-tube-timetable-data.pdf)) to GTFS
