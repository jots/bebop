Bebop
=====
A tool for rapid web development which serves as static file server, websocket server for client-side reloading/bi-directional communcation and file watcher.

Usage
-----
Check `bebop --help` for usage.

Installation
------------
To take advantage of the client-side reloading you need a WebSocket enabled browser and a bit of javascript. You can use the provided Django middleware:

    INSTALLED_APPS = (
        ...,
        'bebop',
    )
    MIDDLEWARE_CLASSES = (
        ...,
        'bebop.middleware.ReloaderMiddleware',
    )

...or simply link to [bebop.js](https://raw.github.com/zeekay/bebop/master/bebop/bebop.js) in your project:

    <script src="https://raw.github.com/zeekay/bebop/master/bebop/bebop.js" type="text/javascript"></script>

Vim
---
If you use a version of Vim with Python compiled in you can add a few handy mappings to your vimrc:

    py import bebop.vimbop
    command! -nargs=* BebopEval         py bebop.vimbop.eval_js(<f-args>)
    command! -nargs=0 BebopEvalLine     py bebop.vimbop.eval_line()
    command! -nargs=0 BebopEvalBuffer   py bebop.vimbop.eval_buffer()

    " Eval javascript in Bebop connected browser
    nnoremap <leader>ee :BebopEval<space>
    " Eval line
    nnoremap <leader>el :BebopEvalLine<cr>
    " Eval range
    vnoremap <leader>er :py bebop.vimbop.eval_range()<cr>
    " Eval entire range
    nnoremap <leader>eb :BebopEvalBuffer<cr>
