/**
 * @file All tasks are split out into separate files located in the gulp
 * tasks folder.
 */

// Load all the tasks.
require('require-dir')('./gulp/tasks', { recurse: true });
