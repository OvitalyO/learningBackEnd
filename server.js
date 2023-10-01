const aaa = require( 'http' )

let requestsCount = 0
const server = aaa.createServer( (request, response) => {
    if(request.url === '/favicon.ico'){
        requestsCount --;
    }
    requestsCount++
    switch ( request.url ) {
        case '/product':
            response.write( 'product - ' + requestsCount )
            break;
        case '/courses':
            response.write( 'Front + Back' + requestsCount )
            break;
        default:
            response.write( '404 not found' )
    }
    response.write('Vitaly: ' + requestsCount)
    response.end()
} )

server.listen( 3003 )