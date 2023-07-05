/* 


let a=8;
let b=88;
function 함수(){
    let a = 10;
    let b = 1010;
    console.log(a) //10
    console.log(b) //1010
}
함수();

console.log(a)  //8
console.log(b)  //88 

*/


//  (function(){})()  -> 즉시실행 함수
(function(){
    let yOffset = 0; //전체 스크롤 값
    let prevScrollHeight = 0; //현재 활성화된 section 이전의 높이값
    let currentScene = 0; //현재 활성화된 (화면에 보이는) section
    let enterNewScene = false; //새로운 section에 진입했을때 알려주는 역할/sec바뀔때 -값 나오는거 없앰


    function setCanvasImages(){
      //canvas에 이미지를 그리기 위한 함수
      let imgEle;
      for(let i=0; i<sceneInfo[0].values.videoImageCount; i++){
        // imgEle = document.createElement('img');  / 밑이랑 같은 뜻
        imgEle = new Image;
        imgEle.src=`./video/001/img_${1+i}.jpg`;
        sceneInfo[0].objs.videoImages.push(imgEle);
      }
      //console.log(sceneInfo[0].objs.videoImages)

      let imgEle2;
      for(let i=0; i<sceneInfo[2].values.videoImageCount; i++){
        // imgEle = document.createElement('img');  / 밑이랑 같은 뜻
        imgEle2 = new Image;
        imgEle2.src=`./video/002/img_${301+i}.jpg`;
        sceneInfo[2].objs.videoImages.push(imgEle2);
      }
    }
    setCanvasImages();


    function setLayout(){
        //각 영역의 높이값을 셋팅
        for(let i=0; i<sceneInfo.length; i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum*window.innerHeight; 
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }
        yOffset=pageYOffset;


        /* 새로고침 시 바디에 id 숫자 1로 바뀌는거 고치기 */
        let totalScrollHeight = 0;
        for(let i=0; i<sceneInfo.length; i++){
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if(totalScrollHeight>=yOffset){
                currentScene=i;
                break;
            }
        }
        document.body.setAttribute('id',`show-scene-${currentScene}`);

        //canvas크기 조절
        //const heightRatio = window.innerHeight/1080;
        const heightRatio = window.innerHeight/975;
        console.log(heightRatio)
        sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%,-50%,0) scale(${heightRatio})`
        sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%,-50%,0) scale(${heightRatio})`

    }; ////setLayout

    function calcValues(values,currentYOffset){// 이 애니메이션의 핵심
        let rv;
        let scrollHeight = sceneInfo[currentScene].scrollHeight;
        let scrollRatio = currentYOffset/scrollHeight;

        if(values.length === 3){
            //values의 요소가 3개인지 확인
            //start와 end 사이에 애니메이션이 실행
            //시작점 구하기
            let partScrollStart = values[2].start*scrollHeight; //values[2].start = 0.1
            let partScrollEnd = values[2].end*scrollHeight; //values[2].end = 0.2
            let partScrollHeight = partScrollEnd - partScrollStart;
            if(currentYOffset>=partScrollStart && currentYOffset<=partScrollEnd){
                rv = (currentYOffset - partScrollStart)/partScrollHeight*(values[1] - values[0])+values[0];
            }else if(currentYOffset<partScrollStart){
                rv = values[0];
            }else if(currentYOffset>partScrollEnd){
                rv = values[1];
            }

        }else{
            rv=scrollRatio*(values[1]-values[0])+values[0];
        }

        return rv;
    }

    function playAnimation(){
        let objs = sceneInfo[currentScene].objs;
        let values = sceneInfo[currentScene].values;
        
        let currentYOffset = yOffset - prevScrollHeight;
        //console.log(currentScene, currentYOffset)
        let scrollHeight = sceneInfo[currentScene].scrollHeight; //sec 전체 높이값
        let scrollRatio = currentYOffset/scrollHeight;

        switch (currentScene){
            case 0:
              let sequence = Math.round(calcValues(values.imageSequence,currentYOffset));
              //console.log(sequence)
              objs.context.drawImage(objs.videoImages[sequence],0,0,1920,1080);

              //canvas opacity
              objs.canvas.style.opacity = calcValues(values.canvas_opacity,currentYOffset);

                //console.log('0 play')
                if(scrollRatio <= 0.22){
                    objs.MessageA.style.opacity = calcValues(values.messageA_opacity_in,currentYOffset);
                    objs.MessageA.style.transform = `translateY(${calcValues(values.messageA_translateY_in,currentYOffset)}%)`;
                }else{
                    objs.MessageA.style.opacity = calcValues(values.messageA_opacity_out,currentYOffset);
                    objs.MessageA.style.transform = `translateY(${calcValues(values.messageA_translateY_out,currentYOffset)}%)`;

                }
                //console.log(messageA_opacity_in)

                if (scrollRatio <= 0.42) {
                    // in
                    objs.MessageB.style.opacity = calcValues(
                      values.messageB_opacity_in,
                      currentYOffset
                    );
                    objs.MessageB.style.transform = `translate3d(0, ${calcValues(
                      values.messageB_translateY_in,
                      currentYOffset
                    )}%, 0)`;
                  } else {
                    // out
                    objs.MessageB.style.opacity = calcValues(
                      values.messageB_opacity_out,
                      currentYOffset
                    );
                    objs.MessageB.style.transform = `translate3d(0, ${calcValues(
                      values.messageB_translateY_out,
                      currentYOffset
                    )}%, 0)`;
                  }

                  if (scrollRatio <= 0.62) {
                    // in
                    objs.MessageC.style.opacity = calcValues(
                      values.messageC_opacity_in,
                      currentYOffset
                    );
                    objs.MessageC.style.transform = `translate3d(0, ${calcValues(
                      values.messageC_translateY_in,
                      currentYOffset
                    )}%, 0)`;
                  } else {
                    // out
                    objs.MessageC.style.opacity = calcValues(
                      values.messageC_opacity_out,
                      currentYOffset
                    );
                    objs.MessageC.style.transform = `translate3d(0, ${calcValues(
                      values.messageC_translateY_out,
                      currentYOffset
                    )}%, 0)`;
                  }

                  if (scrollRatio <= 0.82) {
                    // in
                    objs.MessageD.style.opacity = calcValues(
                      values.messageD_opacity_in,
                      currentYOffset
                    );
                    objs.MessageD.style.transform = `translate3d(0, ${calcValues(
                      values.messageD_translateY_in,
                      currentYOffset
                    )}%, 0)`;
                  } else {
                    // out
                    objs.MessageD.style.opacity = calcValues(
                      values.messageD_opacity_out,
                      currentYOffset
                    );
                    objs.MessageD.style.transform = `translate3d(0, ${calcValues(
                      values.messageD_translateY_out,
                      currentYOffset
                    )}%, 0)`;
                  }
                break;
            case 1:
                //console.log('1 play')
                break;
            case 2:
                //console.log('2 play')
                let sequence2 = Math.round(calcValues(values.imageSequence,currentYOffset));
                //console.log(sequence)
                objs.context.drawImage(objs.videoImages[sequence2],0,0,1920,1080);

                //canvas opacity
                if(scrollRatio<=0.5){
                  objs.canvas.style.opacity = calcValues(values.canvas_opacity_in,currentYOffset);
                }else{
                  objs.canvas.style.opacity = calcValues(values.canvas_opacity_out,currentYOffset);
                }
                
                if (scrollRatio <= 0.25) {
                    // in
                    objs.MessageA.style.opacity = calcValues(
                      values.messageA_opacity_in,
                      currentYOffset
                    );
                    objs.MessageA.style.transform = `translate3d(0, ${calcValues(
                      values.messageA_translateY_in,
                      currentYOffset
                    )}%, 0)`;
                  } else {
                    // out
                    objs.MessageA.style.opacity = calcValues(
                      values.messageA_opacity_out,
                      currentYOffset
                    );
                    objs.MessageA.style.transform = `translate3d(0, ${calcValues(
                      values.messageA_translateY_out,
                      currentYOffset
                    )}%, 0)`;
                  }

                  if (scrollRatio <= 0.57) {
                    // in
                    objs.MessageB.style.transform = `translate3d(0, ${calcValues(
                      values.messageB_translateY_in,
                      currentYOffset
                    )}%, 0)`;
                    objs.MessageB.style.opacity = calcValues(
                      values.messageB_opacity_in,
                      currentYOffset
                    );
                    objs.pinB.style.transform = `scaleY(${calcValues(
                      values.pinB_scaleY,
                      currentYOffset
                    )})`;
                  } else {
                    // out
                    objs.MessageB.style.transform = `translate3d(0, ${calcValues(
                      values.messageB_translateY_out,
                      currentYOffset
                    )}%, 0)`;
                    objs.MessageB.style.opacity = calcValues(
                      values.messageB_opacity_out,
                      currentYOffset
                    );
                    objs.pinB.style.transform = `scaleY(${calcValues(
                      values.pinB_scaleY,
                      currentYOffset
                    )})`;
                  }

                  if (scrollRatio <= 0.83) {
                    // in
                    objs.MessageC.style.transform = `translate3d(0, ${calcValues(
                      values.messageC_translateY_in,
                      currentYOffset
                    )}%, 0)`;
                    objs.MessageC.style.opacity = calcValues(
                      values.messageC_opacity_in,
                      currentYOffset
                    );
                    objs.pinC.style.transform = `scaleY(${calcValues(
                      values.pinC_scaleY,
                      currentYOffset
                    )})`;
                  } else {
                    // out
                    objs.MessageC.style.transform = `translate3d(0, ${calcValues(
                      values.messageC_translateY_out,
                      currentYOffset
                    )}%, 0)`;
                    objs.MessageC.style.opacity = calcValues(
                      values.messageC_opacity_out,
                      currentYOffset
                    );
                    objs.pinC.style.transform = `scaleY(${calcValues(
                      values.pinC_scaleY,
                      currentYOffset
                    )})`;
                  }
                break;
            case 3:
                //console.log('3 play')
                break;
        }
    }; ////playAnimation

    function scrollLoop(){
        enterNewScene=false;
        prevScrollHeight=0;
        for(let i=0; i<currentScene; i++){
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }
        if(yOffset>prevScrollHeight + sceneInfo[currentScene].scrollHeight){
            enterNewScene=true;
            currentScene++;
        }
        if(yOffset<prevScrollHeight){
            enterNewScene=true;
            currentScene--;
        }
        //console.log(currentScene)
        document.body.setAttribute('id',`show-scene-${currentScene}`);

        if(enterNewScene)return; //한줄일때는 {} 안 써도 가능

        //글자 애니메이션을 별도로 함수로 설정
        playAnimation();
    };


    window.addEventListener('scroll',()=>{
        yOffset=pageYOffset;
        scrollLoop();
    })
    window.addEventListener('resize',setLayout);
    window.addEventListener('load',()=>{
      setLayout();
      sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.videoImages[0],0,0,1920,1080); 
    }
    );

})()
