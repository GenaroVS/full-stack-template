const path = require('path')

const src = path.resolve('./client/index.tsx')
const dist = path.resolve('./public')

module.exports = {
  entry: src,
  output: {
    filename: 'bundle.js',
    path: dist
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.frontend.json',
            }
          },
          exclude: /node_modules/,
      },
      /* {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript"],
            plugins: ['@babel/plugin-transform-runtime']
          }
        },
      } */
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
}




/*       {
        test: /\.(tsx|ts)?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.frontend.json',
          }
        },
        exclude: /node_modules/,
      }, */