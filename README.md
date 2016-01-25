# Jisho Quick Radicals

Quickly select radicals on Jisho.org using the keyboard

## Synopsis

A user script aimed at people studying Japanese that lets you quickly select radicals in Jisho.org's kanji lookup interface by typing in a name, reading or other mnemonic.

## Status

This user script is still a work-in-progress. It will currently break the search box on Jisho.org, so install at your own risk.

## Motivation

When you are reading something, encountering an unknown word is annoying. You have to stop reading and look it up. And if the word contains kanji that you don't know it is all the more annoying and time-consuming, as now you have to look up the kanji, and only then the word itself.

There are several different methods for looking up kanji; my favourite is lookup via radicals/elements. Jisho.org has a great interface for lookup by radicals. Unfortunately there are lots of radicals (about 250 in Jisho.org's list), so it can take a while to find the radical you are looking for. The radicals on Jisho.org are sorted by stroke count, which helps, but it still takes time to think about how many strokes are in each radical and then to find it. Then you have to repeat this for the next radical, and so on. All this can add up to a full minute or more, just to find a single kanji!

This user script solves the problem by letting you look up kanji in only a few seconds. Rather than looking for each radical, all you need to do is type its name (or a mnemonic for it) and hit Enter. And since this happens directly in the Jisho.org search box, you are then only a few keystrokes away from looking up the word you were initially looking for.

## Usage

TODO

The user script is available at:
<https://lfire.net/user-scripts/jisho-quick-radicals.user.js>

## Building

Requires:

* make
* cat

To build, simply:

    $ make

The user script will be built as `jisho-quick-radicals.user.js`.

## License

MIT License
