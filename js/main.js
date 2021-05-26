(() => {
  let yOffset = 0; // window.pageYOffset 대신 쓸 변수
  let prevScrollHeight = 0; // 현재 스크롤 위치 (Yoffset) 보다 이전에 위치한 스크롤 섹션 스크롤 높이의 합
  let currentScene = 0; // 현재 활성화된 Scene

  const sceneInfo = [
    {
      // 0
      type: 'sticky',
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-0'),
      },
    },
    {
      // 1
      type: 'normal',
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-1'),
      },
    },
    {
      // 2
      type: 'sticky',
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-2'),
      },
    },
    {
      // 3
      type: 'sticky',
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-3'),
      },
    },
  ];

  function setLayout() {
    sceneInfo.forEach((scene) => {
      scene.scrollHeight = scene.heightNum * window.innerHeight;
      scene.objs.container.style.height = `${scene.scrollHeight}px`;
    });
  }

  function scrollLoop() {
    // prevScroll => 이전 Scene 까지의 Scroll 양
    // sceneInfo[currentScene].scrollHeight => 이번 Scene의 Scroll 양
    // yOffset => Document의 최상단 부터 내려온 scroll의 양

    prevScrollHeight = 0;
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }

    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      currentScene++;
    }

    if (yOffset < prevScrollHeight) {
      if (currentScene === 0) return;
      currentScene--;
    }
    console.log(currentScene);
  }

  window.addEventListener('resize', setLayout);
  window.addEventListener('scroll', () => {
    // 스크롤 하면 발생되는 이벤트
    // 현재 Scene 이 몇번째 Scene 인가 확인 해야 함
    yOffset = window.pageYOffset;
    scrollLoop();
  });

  setLayout();
})();
