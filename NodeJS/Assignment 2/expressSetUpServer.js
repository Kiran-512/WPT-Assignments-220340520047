const express = require('express')
const app = express();

app.use(express.static("staticResources"));// All the files inside this folder 
// we can directly access as https://localhost:portNumber/fileName.ext and server wont process them as they are stored in the static folder

//when "/abc" URI is requested below event will occur
app.get("/abc",(req,res)=>{
    res.send("abc is called and responded")
})

app.get("/def",(req,res)=>{
    res.send("def is called and responded")
})

//to read the params from the URL in express JS
app.get("/login",(req,res)=>{
    console.log("login is requested...")
    
    let empid = req.query.empid; 
    let pass = req.query.password; 
    let userDetails = {empid:empid,password : pass}
    res.send(userDetails) // without AJAX entire page will be loaded and request will be opened up in the new page 
})
// http://localhost:1800/login?empid=12&password=12
// {"empid":"12","password":"12"} for above link

app.get("/rec",(req,res)=>{
    res.send("rec is called and responded")
})

//created server.. opened port 1800 on localhost
app.listen(1800,()=>{
    console.log("Server is listening at the port no 1800...")
})

/*
Install express JS =>

node -v 
npm -v

npm init
next next next

yes
--> this will create package.json file which will store the the package info and all library details

npm install express 
 -- And you are done with the installation of express JS
*/

// console.log(app, typeof app)

/*
<ref *1> [Function: app] {
  _events: [Object: null prototype] { mount: [Function: onmount] },
  _eventsCount: 1,
  _maxListeners: undefined,
  setMaxListeners: [Function: setMaxListeners],
  getMaxListeners: [Function: getMaxListeners],
  emit: [Function: emit],
  addListener: [Function: addListener],
  on: [Function: addListener],
  prependListener: [Function: prependListener],
  once: [Function: once],
  prependOnceListener: [Function: prependOnceListener],
  removeListener: [Function: removeListener],
  off: [Function: removeListener],
  removeAllListeners: [Function: removeAllListeners],
  listeners: [Function: listeners],
  rawListeners: [Function: rawListeners],
  listenerCount: [Function: listenerCount],
  eventNames: [Function: eventNames],
  init: [Function: init],
  defaultConfiguration: [Function: defaultConfiguration],
  lazyrouter: [Function: lazyrouter],
  handle: [Function: handle],
  use: [Function: use],
  route: [Function: route],
  engine: [Function: engine],
  param: [Function: param],
  set: [Function: set],
  path: [Function: path],
  enabled: [Function: enabled],
  disabled: [Function: disabled],
  enable: [Function: enable],
  disable: [Function: disable],
  acl: [Function (anonymous)],
  bind: [Function (anonymous)],
  checkout: [Function (anonymous)],
  connect: [Function (anonymous)],
  copy: [Function (anonymous)],
  delete: [Function (anonymous)],
  get: [Function (anonymous)],
  head: [Function (anonymous)],
  link: [Function (anonymous)],
  lock: [Function (anonymous)],
  'm-search': [Function (anonymous)],
  merge: [Function (anonymous)],
  mkactivity: [Function (anonymous)],
  mkcalendar: [Function (anonymous)],
  mkcol: [Function (anonymous)],
  move: [Function (anonymous)],
  notify: [Function (anonymous)],
  options: [Function (anonymous)],
  patch: [Function (anonymous)],
  post: [Function (anonymous)],
  propfind: [Function (anonymous)],
  proppatch: [Function (anonymous)],
  purge: [Function (anonymous)],
  put: [Function (anonymous)],
  rebind: [Function (anonymous)],
  report: [Function (anonymous)],
  search: [Function (anonymous)],
  source: [Function (anonymous)],
  subscribe: [Function (anonymous)],
  trace: [Function (anonymous)],
  unbind: [Function (anonymous)],
  unlink: [Function (anonymous)],
  unlock: [Function (anonymous)],
  unsubscribe: [Function (anonymous)],
  all: [Function: all],
  del: [Function (anonymous)],
  render: [Function: render],
  listen: [Function: listen],
  request: IncomingMessage { app: [Circular *1] },
  response: ServerResponse { app: [Circular *1] },
  cache: {},
  engines: {},
  settings: {
    'x-powered-by': true,
    etag: 'weak',
    'etag fn': [Function: generateETag],
    env: 'development',
    'query parser': 'extended',
    'query parser fn': [Function: parseExtendedQueryString],
    'subdomain offset': 2,
    'trust proxy': false,
    'trust proxy fn': [Function: trustNone],
    view: [Function: View],
    views: 'c:\\CDAC\\Github\\180-days-of-code\\M5\\Assignments\\NodeJS\\Assignment 2\\views',
    'jsonp callback name': 'callback'
  },
  locals: [Object: null prototype] {
    settings: {
      'x-powered-by': true,
      etag: 'weak',
      'etag fn': [Function: generateETag],
      env: 'development',
      'query parser': 'extended',
      'query parser fn': [Function: parseExtendedQueryString],
      'subdomain offset': 2,
      'trust proxy': false,
      'trust proxy fn': [Function: trustNone],
      view: [Function: View],
      views: 'c:\\CDAC\\Github\\180-days-of-code\\M5\\Assignments\\NodeJS\\Assignment 2\\views',
      'jsonp callback name': 'callback'
    }
  },
  mountpath: '/',
  _router: [Function: router] {
    params: {},
    _params: [],
    caseSensitive: false,
    mergeParams: undefined,
    strict: false,
    stack: [
      [Layer], [Layer],
      [Layer], [Layer],
      [Layer], [Layer],
      [Layer]
    ]
  }
} function
*/

// console.log(express)

/*
 application: {
    init: [Function: init],
    defaultConfiguration: [Function: defaultConfiguration],
    lazyrouter: [Function: lazyrouter],
    handle: [Function: handle],
    use: [Function: use],
    route: [Function: route],
    engine: [Function: engine],
    param: [Function: param],
    set: [Function: set],
    path: [Function: path],
    enabled: [Function: enabled],
    disabled: [Function: disabled],
    enable: [Function: enable],
    disable: [Function: disable],
    acl: [Function (anonymous)],
    bind: [Function (anonymous)],
    checkout: [Function (anonymous)],
    connect: [Function (anonymous)],
    copy: [Function (anonymous)],
    delete: [Function (anonymous)],
    get: [Function (anonymous)],
    head: [Function (anonymous)],
    link: [Function (anonymous)],
    lock: [Function (anonymous)],
    'm-search': [Function (anonymous)],
    merge: [Function (anonymous)],
    mkactivity: [Function (anonymous)],
    mkcalendar: [Function (anonymous)],
    mkcol: [Function (anonymous)],
    move: [Function (anonymous)],
    notify: [Function (anonymous)],
    options: [Function (anonymous)],
    patch: [Function (anonymous)],
    post: [Function (anonymous)],
    propfind: [Function (anonymous)],
    proppatch: [Function (anonymous)],
    purge: [Function (anonymous)],
    put: [Function (anonymous)],
    rebind: [Function (anonymous)],
    report: [Function (anonymous)],
    search: [Function (anonymous)],
    source: [Function (anonymous)],
    subscribe: [Function (anonymous)],
    trace: [Function (anonymous)],
    unbind: [Function (anonymous)],
    unlink: [Function (anonymous)],
    unlock: [Function (anonymous)],
    unsubscribe: [Function (anonymous)],
    all: [Function: all],
    del: [Function (anonymous)],
    render: [Function: render],
    listen: [Function: listen]
  },
  request: IncomingMessage {
    header: [Function: header],
    get: [Function: header],
    accepts: [Function (anonymous)],
    acceptsEncodings: [Function (anonymous)],
    acceptsEncoding: [Function (anonymous)],
    acceptsCharsets: [Function (anonymous)],
    acceptsCharset: [Function (anonymous)],
    acceptsLanguages: [Function (anonymous)],
    acceptsLanguage: [Function (anonymous)],
    range: [Function: range],
    param: [Function: param],
    is: [Function: is],
    protocol: [Getter],
    secure: [Getter],
    ip: [Getter],
    ips: [Getter],
    subdomains: [Getter],
    path: [Getter],
    hostname: [Getter],
    host: [Getter],
    fresh: [Getter],
    stale: [Getter],
    xhr: [Getter]
  },
  response: ServerResponse {
    status: [Function: status],
    links: [Function (anonymous)],
    send: [Function: send],
    json: [Function: json],
    jsonp: [Function: jsonp],
    sendStatus: [Function: sendStatus],
    sendFile: [Function: sendFile],
    sendfile: [Function (anonymous)],
    download: [Function: download],
    type: [Function: contentType],
    contentType: [Function: contentType],
    format: [Function (anonymous)],
    attachment: [Function: attachment],
    append: [Function: append],
    header: [Function: header],
    set: [Function: header],
    get: [Function (anonymous)],
    clearCookie: [Function: clearCookie],
    cookie: [Function (anonymous)],
    location: [Function: location],
    redirect: [Function: redirect],
    vary: [Function (anonymous)],
    render: [Function: render]
  },
  Route: [Function: Route],
  Router: [Function (anonymous)] {
    param: [Function: param],
    handle: [Function: handle],
    process_params: [Function: process_params],
    use: [Function: use],
    route: [Function: route],
    acl: [Function (anonymous)],
    bind: [Function (anonymous)],
    checkout: [Function (anonymous)],
    connect: [Function (anonymous)],
    copy: [Function (anonymous)],
    delete: [Function (anonymous)],
    get: [Function (anonymous)],
    head: [Function (anonymous)],
    link: [Function (anonymous)],
    lock: [Function (anonymous)],
    'm-search': [Function (anonymous)],
    merge: [Function (anonymous)],
    mkactivity: [Function (anonymous)],
    mkcalendar: [Function (anonymous)],
    mkcol: [Function (anonymous)],
    move: [Function (anonymous)],
    notify: [Function (anonymous)],
    options: [Function (anonymous)],
    patch: [Function (anonymous)],
    post: [Function (anonymous)],
    propfind: [Function (anonymous)],
    proppatch: [Function (anonymous)],
    purge: [Function (anonymous)],
    put: [Function (anonymous)],
    rebind: [Function (anonymous)],
    report: [Function (anonymous)],
    search: [Function (anonymous)],
    source: [Function (anonymous)],
    subscribe: [Function (anonymous)],
    trace: [Function (anonymous)],
    unbind: [Function (anonymous)],
    unlink: [Function (anonymous)],
    unlock: [Function (anonymous)],
    unsubscribe: [Function (anonymous)],
    all: [Function (anonymous)]
  },
  json: [Function: json],
  query: [Function: query],
  raw: [Function: raw],
  static: [Function: serveStatic] {
    mime: Mime {
      types: [Object: null prototype],
      extensions: [Object: null prototype],
      default_type: 'application/octet-stream',
      Mime: [Function: Mime],
      charsets: [Object]
    }
  },
  text: [Function: text],
  urlencoded: [Function: urlencoded]
}
*/