'use strict';

const { expect } = require('chai');
const supertest = require('supertest');

global.expect = expect;
global.supertest = supertest;
global.baseUrl = 'http://jsonplaceholder.typicode.com';