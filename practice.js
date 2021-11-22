// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  // create count value
  var count = 0;
  // call _each
  _.each(numbers, function(value, index, collection) {
    // if five goes into value evenly
    if (value % 5 === 0) {
      // add to count value
      count++;
    }
  });
  // return result array
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(value, index, collection) {
    if (value === targetFruit) {
      return true;
    } else {
      return false;
    }
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {

  return _.filter(fruits, function(value) {
    if (value[0] === letter) {
      return true;
    }
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function (item, index, collection) {
    if (collection.type === 'cookie') {
      return true;
    }
  });
};

/*
 *
 *  _.reduce
 *
 */
// return the total price of all products.

/*
_.reduce([1, 2, 3], function(memo, item) {
  return memo + item;
}, 0);
  ---> returns 6
*/



var sumTotal = function(products) {


  return _.reduce(products, function (memo, item) {
    var priceWithSym = item.price.slice();
    var priceNoSym = priceWithSym.slice(1, priceWithSym.length);
    var price = parseFloat(priceNoSym);
    return memo + price;
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }

debugger;
var dessertCategories = function(desserts) {

  _.reduce(desserts, function (memo, item) {

    if (!memo[item.type]) {
      memo[item.type] = 1;
    } else {
      memo[item.type]++;
    }
    console.log(memo);

    return memo;
  }, {});

};

dessertCategories(desserts);



// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {

  _.reduce(movies, function (memo, item) {
    var movie = [item.title];
    // console.log(memo);
    // console.log(movie, item.releaseYear, item.releaseYear > 1900, item.releaseYear < 2000);
    // check if movie came out betwo 1990-2000
    if (item.releaseYear, item.releaseYear >= 1900 && item.releaseYear <= 2000) {
      // if yes, concat movie as arrary with memo
      // console.log( item.title + item.releaseYear.toString() + ` is a 90's movie`);
      memo = memo.concat(movie);
    }
    // return memo
    return memo;
  }, []);

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  _.reduce(movies, function(memo, item) {
    // console.log(item, item.title, item.runtime, timeLimit, item.runtime < timeLimit );
    console.log(memo);
    if (item.runtime < timeLimit) {
      memo = true;
    }
    return memo;
  }, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(value) {
    var upperLetter = value[0].toUpperCase();

    var slicedWord = value.slice(1, value.length);

    var upperCased = upperLetter + slicedWord;
    return upperCased;

  });

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  return _.map(desserts, function(value, index, collection) {
    if (!collection[index].ingredients.includes('flour')) {
      return collection[index].name;
    }
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {

};
