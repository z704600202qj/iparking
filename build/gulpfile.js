const { resolve } = require('path');
const {
  src,
  dest,
  series,
  task
} = require('gulp');
const clean = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const babelrc = require('../.babelrc.js');

const OUTPUT = resolve(__dirname, '../dist/styles');
const THEMES = ['default', 'dark'];
const TS_ENTRY = [
  resolve(__dirname, '../src/**/*.tsx'),
  resolve(__dirname, '../src/**/*.ts'),
  resolve(__dirname, '../src/*.tsx')
];
const LESS_ENTRY = [
  resolve(__dirname, '../src/**/*.less')
];
const IMAGES_ENTRY = [
  resolve(__dirname, '../src/resources/image/*')
];
const LIB_OUTPUT = resolve(__dirname, '../lib');
const ES_OUTPUT = resolve(__dirname, '../es');

const buildCss = () => {
  return THEMES.map(theme => {
    const taskName = `buildCss-${theme}`;
    task(taskName, () => {
      return src(resolve(__dirname, `../src/styles/themes/${theme}/index.less`))
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(rename(`iparking.${theme}.css`))
        .pipe(dest(OUTPUT));
    });
    return taskName;
  })
};

const buildUglifyCss = () => {
  return THEMES.map(theme => {
    const taskName = `buildUglifyCss-${theme}`;
    task(taskName, () => {
      return src(resolve(__dirname, `../src/styles/themes/${theme}/index.less`))
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(clean())
        .pipe(rename(`iparking.${theme}.min.css`))
        .pipe(dest(OUTPUT));
    });
    return taskName;
  })
};

const buildLib = () => {
  return src(TS_ENTRY)
    .pipe(babel(babelrc()))
    .pipe(dest(LIB_OUTPUT));
}

const buildEs = () => {
  return src(TS_ENTRY)
    .pipe(babel(babelrc(null, {
      NODE_ENV: 'es'
    })))
    .pipe(dest(ES_OUTPUT));
};

const copyLess = () => {
  return src(LESS_ENTRY)
    .pipe(dest(LIB_OUTPUT))
    .pipe(dest(ES_OUTPUT))
};

const buildImage = () => {
  return src(IMAGES_ENTRY)
    .pipe(dest(`${LIB_OUTPUT}/resources/image`))
    .pipe(dest(`${ES_OUTPUT}/resources/image`))
};

exports.style = series(
  buildImage,
  ...buildCss(),
  ...buildUglifyCss()
);

exports.lib = series(
  buildLib
);

exports.es = series(
  buildEs
);

exports.copy = series(
  copyLess
);
