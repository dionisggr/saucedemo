const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../src/app');

global.expect = expect;
global.supertest = supertest;
global.app = app;