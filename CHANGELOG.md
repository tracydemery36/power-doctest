# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 3.0.0 (2019-08-25)


### Bug Fixes

* **assert:** fix handling of undefined or null ([#3](https://github.com/azu/power-doctest/issues/3)) ([daed652](https://github.com/azu/power-doctest/commit/daed652))
* **ast:** generate code with comment ([d950164](https://github.com/azu/power-doctest/commit/d950164))
* **error:** can handle ``// => *Error` ([628a26a](https://github.com/azu/power-doctest/commit/628a26a))
* **example:** run example then exit 0 ([c1348bc](https://github.com/azu/power-doctest/commit/c1348bc))
* **example:** use disableSourceMap option ([04c1e32](https://github.com/azu/power-doctest/commit/04c1e32))
* **lib:** fix TypeScript definition ([d32b124](https://github.com/azu/power-doctest/commit/d32b124))
* **node:** console.assert does not throw on Node.js 10 ([6a9a74a](https://github.com/azu/power-doctest/commit/6a9a74a))
* **npm:** fix npm test script ([a90ed9f](https://github.com/azu/power-doctest/commit/a90ed9f))
* **test:** remove undefined method ([333c81c](https://github.com/azu/power-doctest/commit/333c81c))
* **util:** #toAST return AST not Node ([308dbe8](https://github.com/azu/power-doctest/commit/308dbe8))
* **utils:** add missing extractionBody ([3bca03e](https://github.com/azu/power-doctest/commit/3bca03e))
* array and directive string expression support ([1a6efcd](https://github.com/azu/power-doctest/commit/1a6efcd))
* update node types ([6ad0195](https://github.com/azu/power-doctest/commit/6ad0195))


### Features

* **@power-doctest/javascript:** support preTransform options ([20eacb1](https://github.com/azu/power-doctest/commit/20eacb1))
* **@power-doctest/markdown:** add @power-doctest/markdown ([d2c8014](https://github.com/azu/power-doctest/commit/d2c8014))
* **assert:** use `strictEqual` and `deepStrictEqual` ([#9](https://github.com/azu/power-doctest/issues/9)) ([85a4bed](https://github.com/azu/power-doctest/commit/85a4bed)), closes [#6](https://github.com/azu/power-doctest/issues/6)
* **ast:** implement replace comment with assert ([8925ada](https://github.com/azu/power-doctest/commit/8925ada))
* **ast:** support `asyncCallbackName` option ([#11](https://github.com/azu/power-doctest/issues/11)) ([a24e4ec](https://github.com/azu/power-doctest/commit/a24e4ec))
* **ast:** support block comment ([16f3cb2](https://github.com/azu/power-doctest/commit/16f3cb2))
* **ast:** support console api ([e1c7067](https://github.com/azu/power-doctest/commit/e1c7067))
* **bin:** add cli ([73701eb](https://github.com/azu/power-doctest/commit/73701eb))
* **comment:** Support object literal as comment ([9c138c7](https://github.com/azu/power-doctest/commit/9c138c7))
* **error:** support handling `Error: message` ([33f1b70](https://github.com/azu/power-doctest/commit/33f1b70))
* support context, console option ([b868904](https://github.com/azu/power-doctest/commit/b868904))
* **example:** add example ([de07e6a](https://github.com/azu/power-doctest/commit/de07e6a))
* **lib:** Resolve: and Reject: support ([1169542](https://github.com/azu/power-doctest/commit/1169542))
* **options:** support assertBeforeCallbackName and assertAfterCallbackName ([2466b17](https://github.com/azu/power-doctest/commit/2466b17))
* **src:** support Promise comment ([#4](https://github.com/azu/power-doctest/issues/4)) ([b7882b5](https://github.com/azu/power-doctest/commit/b7882b5))
* **util:** add #wrapNode function ([36baa81](https://github.com/azu/power-doctest/commit/36baa81))
* support NaN assert ([117daeb](https://github.com/azu/power-doctest/commit/117daeb))


### BREAKING CHANGES

* **assert:** assertion is strict by default



# 2.2.0 (2019-08-24)


### Features

* support assertBeforeCallbackName and assertAfterCallbackName options ([32f5ade](https://github.com/azu/power-doctest/commit/32f5ade))



# 2.1.0 (2019-01-19)


### Features

* **option:** support `asyncCallbackName` option ([0516ad5](https://github.com/azu/power-doctest/commit/0516ad5))



# 2.0.0 (2019-01-19)


### Features

* add options ([30c80cc](https://github.com/azu/power-doctest/commit/30c80cc))



# 1.4.0 (2018-10-14)


### Features

* **depsO:** upgrade ast-source@3.0 ([5bc4f71](https://github.com/azu/power-doctest/commit/5bc4f71))



## 1.3.2 (2018-02-27)


### Bug Fixes

* **pacakge:** fix build script ([6c498ab](https://github.com/azu/power-doctest/commit/6c498ab))



## 1.3.1 (2017-11-23)



# 1.3.0 (2017-09-10)


### Features

* **npm:** update dpes ([5e75c54](https://github.com/azu/power-doctest/commit/5e75c54))



# 1.2.0 (2016-11-19)


### Features

* **npm:** update to espower@2.0 ([41afee6](https://github.com/azu/power-doctest/commit/41afee6))



## 1.1.1 (2016-07-29)


### Bug Fixes

* **src:** fix transform ([2020f6f](https://github.com/azu/power-doctest/commit/2020f6f))



# 1.1.0 (2016-06-16)


### Features

* **ast:** support module type ([7e63fa0](https://github.com/azu/power-doctest/commit/7e63fa0))



## 1.0.1 (2015-08-09)


### Bug Fixes

* **bin:** fix path to lib ([2f99c82](https://github.com/azu/power-doctest/commit/2f99c82))
* **npm:** add esprima to dependencies ([e5529f3](https://github.com/azu/power-doctest/commit/e5529f3))



# 1.0.0 (2015-08-09)


### Bug Fixes

* **npm:** add concat-stream ([79e27ab](https://github.com/azu/power-doctest/commit/79e27ab))


### Features

* **cli:** add cli for power-doctest ([d9e1a7c](https://github.com/azu/power-doctest/commit/d9e1a7c))



## 0.3.4 (2014-08-12)



## 0.3.3 (2014-07-21)


### Bug Fixes

* show pass when assert failed ([402fe98](https://github.com/azu/power-doctest/commit/402fe98))



## 0.3.2 (2014-03-22)


### Bug Fixes

* **memory-leak:** remove listeners when finished ([4b98531](https://github.com/azu/power-doctest/commit/4b98531))



# 0.3.0 (2014-03-22)


### Bug Fixes

* **error:** add domain error handling ([324b87e](https://github.com/azu/power-doctest/commit/324b87e))
* **reporter:** change default reporter. ([c3720d6](https://github.com/azu/power-doctest/commit/c3720d6)), closes [#8](https://github.com/azu/power-doctest/issues/8)
* **travis:** update node.js on travis ([606f268](https://github.com/azu/power-doctest/commit/606f268))



## 0.2.5 (2014-03-02)



## 0.2.4 (2014-03-02)


### Features

* **option:** add `extractConsole` option ([b7a76dc](https://github.com/azu/power-doctest/commit/b7a76dc))



## 0.2.1 (2013-12-08)



# 0.2.0 (2013-12-08)



## 0.1.4 (2013-12-04)



## 0.1.3 (2013-12-04)



## 0.1.2 (2013-12-04)



## 0.1.1 (2013-12-04)



# 0.1.0 (2013-12-01)



## 0.0.1 (2013-12-01)