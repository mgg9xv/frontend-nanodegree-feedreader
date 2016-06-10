/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 *
 * We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* Test suite for the RSS Feeds */
    describe('RSS Feeds', function() {
        /* Test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have non-empty URLs', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).not.toBe(undefined);
                expect(feed.url).not.toBe('');
            });
        });
        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have non-empty names', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).not.toBe(undefined);
                expect(feed.name).not.toBe('');
            });
        })
    });
    /* Test suite for testing the side menu */
    describe('The menu', function(){
        /* Test that ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function(){
            var body = $('body');
            expect(body.hasClass('menu-hidden')).toBe(true);
        })
        /* Test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('is visible when the menu icon is clicked', function(){
            var body = $('body');
            var menuIcon = $('.menu-icon-link');
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });
    /* Test suite for testing the initial entries */
    describe('Initial Entries',function(){
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done){
            loadFeed(0, done);
        });
        it('have at least one entry', function(){
            var feed = $('.feed');
            var entries = feed.find('.entry');
            expect(entries.length).toBeGreaterThan(0);
        });
    });
    /* Test suite for testing new feed selection */
    describe('New Feed Selection', function(){
        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var initialTitle, initialEntry, newTitle, newEntry;;
        beforeEach(function(done){
            loadFeed(0, function(){
                initialTitle = $('.header-title').html();
                initialEntry = $('.feed').find('.entry').first().html();
                done();
            });
        });
        it('causes new feed to be loaded', function(done){
            loadFeed(1, function(){
                newTitle = $('.header-title').html();
                newEntry = $('.feed').find('.entry').first().html();
                expect(newTitle).not.toMatch(initialTitle);
                expect(newEntry).not.toMatch(initialEntry);
                done();
            });
        });
    });
}());
