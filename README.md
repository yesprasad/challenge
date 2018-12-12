# Bloomon Code Challenge

This file has **best readability as a markdown preview/ as a webpage in a browser**

## To run on a Linux/MacOS environment

* Clone this repository
* Make sure **node.js version > 8.9.4** is installed is installed. We are using async functions part of ES2017
* Open a terminal window and navigate to the cloned repository
* Run **`npm install`** in your terminal window
* Now run **`npm run valid-bloomon`** to run the application using the valid stream of data
* Now run **`npm run invalid-bloomon`** to run the application using the valid stream of data
* To run your own stream of data in the app use - **`npm run factory`** and pipe the input file

## Outputs

*`npm run valid-bloomon` and `npm run invalid-bloomon` both will run*eslint -> test cases -> code coverage -> code execution*

### valid stream of data

*for this run, we will see an output as a table of data similar to this

**ORDERS FINISHED SUCCESSFULLY:**
| (index) | inputBouquetSpecification | ClientBouquetToDeliver | extraFolwersUsedInBouquet              |
|---------|---------------------------|------------------------|----------------------------------------|
| 0       |       'AL10a15b5c30'      | 'AL10a15b5c'           | 'extra flowers used in the bouquet: 0' |
| 1       |        'AS10a10b25'       | 'AS13a12b'             | 'extra Flowers used in the bouquet: 5' |
| 2       |         'BS11b5c'         | 'BS11b5c'              | 'extra Flowers used in the bouquet: 1' |

### Invalid stream of data

When our file has invalid data as well, the output is similar to below tables
**ORDERS FINISHED SUCCESSFULLY:**
| (index) | inputBouquetSpecification | ClientBouquetToDeliver | extraFolwersUsedInBouquet              |
|---------|---------------------------|------------------------|----------------------------------------|
| 0       |       'AL10a15b5c30'      | 'AL10a15b5c'           | 'extra flowers used in the bouquet: 0' |
| 1       |        'AS10a10b25'       | 'AS13a12b'             | 'extra Flowers used in the bouquet: 5' |
| 2       |         'BS11b5c'         | 'BS11b5c'              | 'extra Flowers used in the bouquet: 1' |

**ORDERS THAT COULD NOT BE PROCESSED:**
| (index) | inputBouquetSpecification |                            errorMessage                           |
|:-------:|:-------------------------:|:-----------------------------------------------------------------:|
|    0    |        'CL20a15c33'       | 'Rule total flowers is larger than bouquet max flower allocation' |

### Implementation strategy

* The application uses eslint for linting
* Istanbul is used for code coverage
* mocha-chai(expect) **BDD style** is used for unit testing
* Most of the code is covered as part of the unit testing. There are few misses because of time constraint
* Mock and spy using sinon is not used with the belief that we do not have any external api dependency.
* Validations performed on the input stream can be found in the exceptions.js file
* linting, unit test and code coverage are run before the actual code execution to mimic production ready code

## Challenge description

Bloomon has a production facility that produces bouquets. We simplified how the real one - located in Aalsmeer - works, for the purpose of this technical challenge:

* It uses _flowers_ of different species and sizes as input;
* It produces _bouquets_ of different designs and sizes as output;
* The people in the production facility are making those bouquets by design specifications that tell how many _flowers_ are needed of which kinds;
* The _flowers_ arrive into the facility one-by-one, and they can be stored there until there's enough _flowers_ to create a _bouquet_.

Your job is to create an application that takes the design specs (the rules) and the stream of flowers as an input, and produce the stream of bouquets as an output. The application needs to be a command line application using standard input and output.

It can be written in any of the following languages: JavaScript, TypeScript, Ruby, Python, Java, PHP.

The solution should be submitted in a GitHub / GitLab repository, with full source code and configuration files to build and run it in a Docker container. Please also add "BloomonDev" user to have access to the repo from the beginning.

Completing the challenge should take approximately 4 hours and we expect you to return it in the next couple of days. If you see you're exceeding the 4 hours, you should submit your solution as it is, with a short explanation of what is left and how you would finish the challenge.

### Input / output format specifications

* _Flower_ species are identified by a single, lowercase letter:  a - z .
* _Flower_ size is indicated by a single, uppercase letter: L (large) and S (small).

**example**: a flower: rL

* _Bouquet_ name is indicated by a single, uppercase letter: A - Z .
* _Bouquet_ size is indicated by a single, uppercase letter: L (large) and S (small).

* A _bouquet spec_ is a single line of characters with the following format:

`<bouquet name><bouquet size><flower 1 quantity><flower 1 specie><f.2 quantity><f.2 specie>...<f.N quantity><f.N species><total quantity of flowers in the bouquet>`

**example**: AL8d10r5t30

* The _bouquet spec_ format includes a _bouquet_ size but no _flower_ sizes. This is because large _bouquets_ are only made from large _flowers_, and small _bouquets_ are only made from small _flowers_.
* _Flower_ species are listed in alphabetic order and only appear once in a _bouquet spec_.
* _Flower_ quantities are always greater than 0.
* The total quantity can be bigger than the the sum of the flower quantities, allowing extra space in the bouquets that can consist of any kind of flowers.

* The input stream will follow this structure:

`bouquet spec1
bouquet spec2
<empty line>
flower1
flower2
flower3
...`

**example**:

`AS3a4b6k20
AL8d10r5t30

aS
aS
bL
rL
tS
...`

* Output should be the full _bouquet_ spec every time a _bouquet_ can be created.

**example**: AL8d7l10r5t

You can find a sample input file under /sample.

### Extra task

Note: In case you want to show off and you haven't spent the 4 hours yet you can also try to tackle this one!

Our storage facility has a maximum capacity: the facility cannot store more than **256** _flowers_ at any given time. If the facility storage is full and the next _flower_ cannot be processed, the application should stop with an **exit** code of 1 and a corresponding error message.

The objective is to produce a ***reasonable*** amount of bouquets (good coding practices and structure are more important than coming up with an algorithm that produces high yields).

## Wrap up

Are you done? Great!! Please let challenge@bloomon.nl know that you are ready, and we will help you with next steps. Thank you for participating in our code challenge!