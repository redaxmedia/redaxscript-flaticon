#!/usr/bin/env bash

cd build

for path in *
do
	mkdir -p ../flaticon/$path;
done

for path in */*.svg
do
	rsvg-convert $path --format svg --keep-aspect-ratio --height 24 --width 24 --output ../flaticon/$path;
	svgo ../flaticon/$path --disable=convertPathData --pretty --quiet --output ../flaticon/$path;
	echo -n .
done
echo