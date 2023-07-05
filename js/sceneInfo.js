const sceneInfo=[{
    //0
    type:"sticky",
    //sticky기능이 있는것과 없는 것을 구별
    heightNum:5,
    scrollHeight:0,
    objs:{
        container:document.querySelector('#scroll-section-0'), //객체라서 , 사용
        MessageA:document.querySelector('#scroll-section-0 .main-message.a'),
        MessageB:document.querySelector('#scroll-section-0 .main-message.b'),
        MessageC:document.querySelector('#scroll-section-0 .main-message.c'),
        MessageD:document.querySelector('#scroll-section-0 .main-message.d'),
        canvas:document.querySelector('#video-canvas-0'),
        context:document.querySelector('#video-canvas-0').getContext('2d'),
        videoImages:[],
    },
    values:{
        videoImageCount:300,
        imageSequence:[0,299],
        canvas_opacity:[1,0,{start: 0.9, end:1}],
        messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
        messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
        messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
        messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
        messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
        messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
        messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
        messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
        messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
        messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
        messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
        messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
        messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
        messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
        messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
        messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
    }
},{
    //1
    type:"normal",
    //sticky기능이 있는것과 없는 것을 구별
    heightNum:1, //길이가 너무 길어서 1
    scrollHeight:0,
    objs:{
        container:document.querySelector('#scroll-section-1'),
        
    }
},{
    //2
    type:"sticky",
    //sticky기능이 있는것과 없는 것을 구별
    heightNum:5,
    scrollHeight:0,
    objs:{
        container:document.querySelector('#scroll-section-2'),
        MessageA: document.querySelector("#scroll-section-2 .a"),
        MessageB: document.querySelector("#scroll-section-2 .b"),
        MessageC: document.querySelector("#scroll-section-2 .c"),
        pinB: document.querySelector("#scroll-section-2 .b .pin"),
        pinC: document.querySelector("#scroll-section-2 .c .pin"),
        canvas:document.querySelector('#video-canvas-1'),
        context:document.querySelector('#video-canvas-1').getContext('2d'),
        videoImages:[],
    },
    values:{
        videoImageCount:960, /* 바꾸기 */
        imageSequence:[0,959],
        canvas_opacity_in:[0,1,{start: 0, end:0.1}],
        canvas_opacity_out:[1,0,{start: 0.9, end:1}],
        messageA_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
        messageB_translateY_in: [30, 0, { start: 0.5, end: 0.55 }],
        messageC_translateY_in: [30, 0, { start: 0.72, end: 0.77 }],
        messageA_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
        messageB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
        messageC_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
        messageA_translateY_out: [0, -20, { start: 0.3, end: 0.35 }],
        messageB_translateY_out: [0, -20, { start: 0.58, end: 0.63 }],
        messageC_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
        messageA_opacity_out: [1, 0, { start: 0.3, end: 0.35 }],
        messageB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
        messageC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
        pinB_scaleY: [0.5, 1, { start: 0.5, end: 0.55 }],
        pinC_scaleY: [0.5, 1, { start: 0.72, end: 0.77 }],
        pinB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
        pinC_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
        pinB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
        pinC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
    }
},{
    //3
    type:"sticky",
    //sticky기능이 있는것과 없는 것을 구별
    heightNum:2,
    scrollHeight:0,
    objs:{
        container:document.querySelector('#scroll-section-3')
    }
}]