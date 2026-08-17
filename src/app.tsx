import { jsx, patch } from '@snupo/jmc'

let App = <body>
    <div>bugs bunny was here</div>
</body>

patch(document.body, App)
