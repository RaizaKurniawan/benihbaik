describe ('Http Example', function() {
    it('Get', function(){
        cy 
            .request({
                method: 'GET',
                url : 'https://httpbin.org/get'
            }).then(function (response) {
                expect(response.body).have.property('url');
            })
    })
})