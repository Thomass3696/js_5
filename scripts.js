$('#b_1').click(() => {
    console.log('Yeah, you clicked me.')
})

$('#b_2').click(() => {
    $('#b_1').text('Shoot')
})

$('#b_3').click(() => {
    $('#b_1').css('background', 'lightpink')
    $('#b_2').css('background', 'lightgreen')
    $('#b_3').css('background', 'lightblue')
})