/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/
const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const sgMail = require('@sendgrid/mail');
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'test@example.com';
const FORM_KEY = process.env.FORM_KEY || '';
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '';
const h = require('./sanitize');

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

// async wrapper
const asyncWrapper = (fn) => {
  return (req, res, next) => {
    return fn(req, res, next).catch(next);
  };
};

/**********************
 * Example get method *
 **********************/

app.get('/api', function (req, res) {
  // Add your code here
  res.json({ success: 'get call succeed!', url: req.url });
});

app.get('/api/*', function (req, res) {
  // Add your code here
  res.json({ success: 'get call succeed!', url: req.url });
});

/****************************
 * Example post method *
 ****************************/

app.post('/api', function (req, res) {
  // Add your code here
  res.json({ success: 'post call succeed!', url: req.url, body: req.body });
});

app.post(
  '/api/sendmail',
  asyncWrapper(async function (req, res, next) {
    // Add your code here

    const form = req.body;

    if (form.name && form.email && form.key === FORM_KEY) {
      sgMail.setApiKey(SENDGRID_API_KEY);
      const messages = [
        {
          to: form.email,
          bcc: ADMIN_EMAIL,
          from: `Hiroshi Morishige<${ADMIN_EMAIL}>`,
          subject: '???himorishige.io????????????????????????????????????????????????',
          text: `${h(form.name)} ???

    ????????????????????????????????????????????????????????????
    himorishige.io????????????????????????????????????

    ???????????????????????????????????????????????????????????????????????????
    ?????????????????????????????????????????????

    ?????????????????????????????????????????????????????????????????????????????????????????????????????????

    ????????????????????????????????????????????????

    ????????????????????????
    ${h(form.message)}

    ---
    Hiroshi Morishige
    https://himorishige.io/
    ${ADMIN_EMAIL}`,
        },
        {
          to: ADMIN_EMAIL,
          from: form.email,
          subject: '???himorishige???????????????',
          text: `${h(form.name)} ??????????????????????????????????????????

    ???????????????
     ${h(form.name)}

    ???E-mail???
     ${h(form.email)}

    ?????????????????????
     ${h(form.message)}
     `,
        },
      ];

      await sgMail.send(messages).then(
        () => {
          res.json({ success: 'send messages', url: req.url });
        },
        (error) => {
          console.error(error);

          if (error.response) {
            console.error(error.response.body);
          }
        },
      );
    } else {
      res.json({ success: 'post call succeed!', url: req.url, body: req.body });
    }
  }),
);

/****************************
 * Example put method *
 ****************************/

app.put('/api', function (req, res) {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, body: req.body });
});

app.put('/api/*', function (req, res) {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete('/api', function (req, res) {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url });
});

app.delete('/api/*', function (req, res) {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url });
});

app.listen(3000, function () {
  console.log('App started');
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
