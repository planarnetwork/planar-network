---
title: Industry data feeds
description: Planar Network maintain a number of tools to import, convert and manage industry data feeds. Where possible a GTFS feed of the latest bus, rail and plane data is provided.
layout: post
image: /assets/img/feeds.png
---

Planar Network maintain a [number of tools](https://www.github.com/planarnetwork) for converting various industry standards to GTFS. Where possible we maintain a public version of the feed itself on [transitfeeds.com](http://transitfeeds.com).
{: .article-headline}

## Rail

Data is supplied and licensed by [Rail Delivery Group](https://www.raildeliverygroup.com/) and is available directly through their [data portal](http://data.atoc.org/).

Download the latest GTFS feed: [gb-rail-latest.zip](https://s3.eu-west-2.amazonaws.com/feeds.planar.network/gb-rail-latest.zip)

## Eurostar

Data is converted from the Eurostar [PDF timetable](https://content-static.eurostar.com/documents/446099_Timetables%20Core%20destination_Issue%2082_UK%20EN_0.pdf).

- Eurostar - [eurostar.zip](https://s3.eu-west-2.amazonaws.com/feeds.planar.network/eurostar.zip)

## Bus

Data is supplied and licensed by [Traveline](http://www.travelinedata.org.uk/traveline-open-data/traveline-national-dataset/).

There are several data sets available:

- All GB bus services - [gb-bus-latest.zip](https://s3.eu-west-2.amazonaws.com/feeds.planar.network/gb-bus-latest.zip)
- East Anglia bus services [ea-bus-latest.zip](https://s3.eu-west-2.amazonaws.com/feeds.planar.network/ea-bus-latest.zip)
- East Midlands bus services [em-bus-latest.zip](https://s3.eu-west-2.amazonaws.com/feeds.planar.network/em-bus-latest.zip)
- London bus services [l-bus-latest.zip](https://s3.eu-west-2.amazonaws.com/feeds.planar.network/l-bus-latest.zip)
- National coach services [ncsd-bus-latest.zip](https://s3.eu-west-2.amazonaws.com/feeds.planar.network/ncsd-bus-latest.zip)
- North east bus services [ne-bus-latest.zip](https://s3.eu-west-2.amazonaws.com/feeds.planar.network/ne-bus-latest.zip)
- North west bus services [nw-bus-latest.zip](https://s3.eu-west-2.amazonaws.com/feeds.planar.network/nw-bus-latest.zip)
- Southern bus services [s-bus-latest.zip](https://s3.eu-west-2.amazonaws.com/feeds.planar.network/s-bus-latest.zip)
- South east bus services [se-bus-latest.zip](https://s3.eu-west-2.amazonaws.com/feeds.planar.network/se-bus-latest.zip)
- South west bus services [sw-bus-latest.zip](https://s3.eu-west-2.amazonaws.com/feeds.planar.network/sw-bus-latest.zip)
- Western bus services [w-bus-latest.zip](https://s3.eu-west-2.amazonaws.com/feeds.planar.network/w-bus-latest.zip)
- West midlands bus services [wm-bus-latest.zip](https://s3.eu-west-2.amazonaws.com/feeds.planar.network/wm-bus-latest.zip)
- Yorkshire bus services [y-bus-latest.zip](https://s3.eu-west-2.amazonaws.com/feeds.planar.network/y-bus-latest.zip)

## Flights

We have an [open source tool](https://github.com/planarnetwork/ssim2gtfs) to convert SSIM flight schedules to GTFS but no data with a license to public the data in GTFS format. If you would like us to host any feeds please [get in touch](mailto:info@planar.network).

## Tools

All tools are open source (licensed under GPLv3) and are available on [github](https://www.github.com/planarnetwork):

- [dtd2mysql](https://www.github.com/planarnetwork/dtd2mysql) - converts UK rail [CIF](https://www.raildeliverygroup.com/files/Publications/services/rsp/RSPS5046-01-00_Timetable_Information_Data_Feed_InterfaceSpecification.pdf) format to GTFS
- [transxchange2gtfs](https://www.github.com/planarnetwork/transxchange2gtfs) - converts UK bus data ([TransXChange](https://www.gov.uk/government/collections/transxchange)) to GTFS
- [eurostar2gtfs](https://www.github.com/planarnetwork/eurostar2gtfs) - converts Eurostar data to GTFS
- [gtfsmerge](https://www.github.com/planarnetwork/gtfsmerge) - merges multiple GTFS data sets
- [ssim2gtfs](https://www.github.com/planarnetwork/ssim2gtfs) - converts [IATA SSIM](https://www.iata.org/publications/store/Pages/standard-schedules-information.aspx) format to GTFS
- [cuf2gtfs](https://www.github.com/planarnetwork/cuf2gtfs) - converts TfL London Underground schedules ([CUF](http://content.tfl.gov.uk/cuf-technical-spec-tube-timetable-data.pdf)) to GTFS
