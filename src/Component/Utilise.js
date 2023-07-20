import moment from 'moment/moment'

export const analyze = (text) => {
    if (text.includes('hi') || text.includes('Hi') || text.includes('Hello') || text.includes('Good Morning'))
        return 'Hi ,How can i help you?'
    else if (text.includes(`what is today's date`))
        return moment().format('MMMM Do YYYY')
    else if (text.includes(`what is today's day`))
        return moment().format('dddd')    
    else if (text.includes('what is the time now'))
        return moment().format('h:mm:ss a')
    else if (text.includes('tell me a toungue twister'))
        return 'She Shelly says she shall sew sheets'
    else if (text.includes('tell me about yourself'))
        return 'I am a Chatbot Developed By Md shakeel.'
    else if (text.includes('how old are you'))
        return `I've always wanted to do this.How old Do You think i am?`
    else if (text.includes('Bye'))
        return `Bye,Have A Good Day Ahead`
    else if (text.includes('who invented computer'))
        return `Charles Babbage`    
    else if (text.includes('smallest state of india is'))                           
        return `Charles Babbage`  
    else if (text.includes('capital of tamilnadu'))
        return `Chennai`  


    return 'I cant get you. Can you rephrase the message'
}