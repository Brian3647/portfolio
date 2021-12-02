+++
title = "Learn how to read & write binary numbers"
date = 2021-12-02

[taxonomies]
tags = ["binary"]
categories = ["Programming"]
+++

In this article I'll show you the basics of how to read and write binary numbers.

## Don't kill me

This article is oversimplified, and i _know_ that not in every case of writing/reading binary it works like this, but it does in it's majority, so I'll find it useful.

## The basics

As you might know, computers use `0`s and `1`s everywhere to represent everything.

That combination of `0`s and `1`s is called **binary** langauge. Every `0` and `1` is called a **bit**. If you combine 8 bits, you can create what is called a **byte**. Humans can write and read bytes pretty easily, in this article I'll show you _how_.

## Reading

A byte looks something like this: `01000101`. We read bytes from right to left.

Each bit represents a number, starting from right: the first one is 1, then 2, thhen 4, then 8.. and finally 128.

We have the result starting with 0.

For each bit from right to left, if it's `1` we add it's value to the result. Else, we ignore it / add 0.

The example byte, `01000101` can be read like this:

0 + 64 + 0 + 0 + 0 + 4 + 0 + 1 = 69 _(nice!)_

## Writing

If you know how to read, writing is very easy!

You just have to remember the bit values, and you're done.

I recommend trying it on this page I made: <https://practice-binary.vercel.app>. Good luck!
