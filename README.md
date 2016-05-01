# Cascadia Acceptance Email Generator

## usage
```bash
$ npm start -- path/to/csv conferece-day curator http://link.to/acceptance/form
```
e.g.

npm start -- node.csv Node "Myles Borins" "http://someform.biz/CHASUM256"

## how to get the csv?

Export it from google docs as shown below. Make sure you export the TSV not the CSV (comma separated makes things weird)

![export a tsv](https://raw.githubusercontent.com/TheAlphaNerd/cascadia-email-template/master/tsv.png)

There may be garbage data in the csv, so make sure you sanitize it first.
