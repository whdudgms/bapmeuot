// NestJS의 테스트 관련 유틸리티를 임포트합니다
import { Test, TestingModule } from '@nestjs/testing';

// 테스트 대상이 되는 AppController와 AppService를 임포트합니다
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 컨트럴러 테스트
// AppController 유닛 테스트 시작
describe('AppController', () => {
  let appController: AppController; // 테스트 대상 컨트롤러 변수 선언

  // 각 테스트 전에 실행되는 비동기 함수 (테스트 환경 초기화)
  beforeEach(async () => {
    // 테스트용 NestJS 모듈을 생성합니다
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],  // 테스트할 컨트롤러 등록
      providers: [AppService],       // 컨트롤러가 사용하는 서비스 등록
    }).compile(); // DI 컨테이너 초기화

    // DI 컨테이너에서 AppController 인스턴스를 주입받음
    appController = app.get<AppController>(AppController);
  });

  // "root"라는 이름의 테스트 그룹
  describe('root', () => {
    // 실제 테스트 케이스 정의
    it('should return "Hello  nest World!"', () => { // 테스트 케이스의 이름
      // AppController의 getHello() 결과가 예상값과 같은지 검증
      expect(appController.getHello()).toBe('Hello N12est World!');
    });
  });
});
