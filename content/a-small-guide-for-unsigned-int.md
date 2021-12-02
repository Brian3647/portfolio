+++
title = "Learn how unsigned integers work"
date = 2021-12-02

[taxonomies]
tags = ["binary"]
categories = ["Programming"]
+++

An int (or integer) is a full number with no factorial part.

In computer science, there are 2 base types or int: __signed__ ints and __unsigned__ ints.

## And what's the difference between signed ints?

In simple words: signed ints can be positive or negative, while unsigned ints can only represent positive numbers.

## Types of unsigned ints

There are a lot of types. [Rust] has very good descriptive names for them.

In programming languages like C or C++, they're divided into `unsigned short`, `unsigned int`, `unsigned long` and `unsigned long long`. We will refer to them as they are in rust: `u8`, `u16`, `u32`, and `u64`, respectively.

### But.. What does `u{n}` mean?

`u{n}` means `unsigned {n}` where `{n}` it's the number of bits the number can use.

## "I'm not understanding anything." The basics

As you might know, computers use `0`s and `1`s everywhere to represent everything.

That combination of `0`s and `1`s is called **binary** langauge. Every `0` and `1` is called a **bit**. If you combine 8 bits, you can create what is called a **byte**. Humans can write and read bytes pretty easily. [Heres a guide](/writing-and-reading-binary) to help you.

In a byte, you can store numbers from 0 up to 255, where `00000000` is 0 and `11111111` is 255.

As commented before, the number of bits in a byte is 8, so the type of unsigned integer will be `u8`. 

## I want numbers bigger than 255!

`u8` can only handle numbers from 0 to 255. And usually that's just not enough.

Let's jump to the next type: `u16`. You can store numbers from 0 up to \\(65,535\\).

You probably won't want to memorize the number \\(65,535\\), so here's a trick: **An n-bit unsigned int has a size of \\((2^n)-1\\)**. In this case, `u16` has a value of \\((2^{16})-1\\), which is exactly \\(65,535\\).

The same applies to `u32`, `u64` and any `u{n}` type.

## Overflows: the developer's nightmare

Imagine you have somewhere 8 bits stored that represent a number. You want to add 1 to it. Pain comes in.

An overflow happens when the number is bigger than the type's max or it's below 0. As said before, unsigned ints can't be negative, so what happens if we try to make something with an `u8` type become \\(-1\\)? It simply goes all the way up.

For example, \\(0 - 1\\) in an `u8` becomes \\(255\\) again.

Something similar applies if you want to add 1 to \\(255\\) in an `u8`. It goes back to \\(0\\).

[rust]: https://rust-lang.org
