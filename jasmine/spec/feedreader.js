/*This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application. */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.*/
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.*/

it('urls are defined and not empty' , function(){
    allFeeds.forEach(function(f){
        expect(f.url).toBeDefined();
        expect(f.url.length).not.toBe(0);
    });
});
 /*a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.*/
  it('names are defined and not empty' , function(){
    allFeeds.forEach(function(f){
        expect(f.name).toBeDefined();
        expect(f.name.length).not.toBe(0);
    });
});       
    }); //end describe RSS Feed


 /* a new test suite named "The menu" */
describe('The menu', function(){

 /* a test that ensures the menu element is
  * hidden by default.*/

it('The menu is hidden',function(){
 expect($("body").hasClass('menu-hidden')).toBe(true);
});

 /* a test that ensures the menu changes
  * visibility when the menu icon is clicked. */

it('menu hidden/showen when icon clicked', function(){
let icon = document.querySelector('.menu-icon-link');
icon.click();
expect($("body").hasClass('menu-hidden')).not.toBe(true);
icon.click();
expect($("body").hasClass('menu-hidden')).toBe(true);
});
}); //end describe menu

/* a new test suite named "Initial Entries"
refrence : https://www.htmlgoodies.com/beyond/javascript/stips/
using-jasmine-2.0s-new-done-function-to-test-asynchronous-processes.html */
describe("Initial Entries", function(){

/* a test that ensures when the loadFeed
 * function is called and completes its work, and there is at least
 * a single .entry element within the .feed container.*/

//because loadFeed() is asynchronous we have to use the beforeEach() & done() jasmine functions
beforeEach(function(done){loadFeed(0,function(){done();});}); 

it('a single .entry element within the .feed container', function(done){
//feEn = Feed , Entry
let feEn = document.querySelector('.feed').getElementsByClassName('entry').length;
expect(feEn).toBeGreaterThan(0);
done();
   });
}); //end describe initial entries

    /* a new test suite named "New Feed Selection" */
   describe("New Feed Selection", function(){
   	
   	/* a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.*/

   	let feed;
//bacuse loadFeed() is asynchronous
beforeEach(function(done){
	loadFeed(0,function(){
	feed=document.querySelector('.feed').innerHTML;
	loadFeed(1,function(){done();});
});
});

it('New feed is loaded by loadfeed function',function(done){
	let newFeed = document.querySelector('.feed').innerHTML;
	expect(feed).not.toBe(newFeed);
	done();	
});

}); //End of Descripe New Feed Selection
        
}());
