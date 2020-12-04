// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';
    
    // @property('string')
    // a: string ='nihao'
    // LIFE-CYCLE CALLBACKS:

    @property
    step: number =20;

    @property
    fangxiang: boolean=true;

    @property(cc.AudioClip)
    audio: cc.AudioClip =null
    onLoad () {
        this.node.on('mousedown',this.goleft,this)
    }

    start () {
        cc.log('start执行了')
    }
    goleft(){
        if(this.fangxiang){
            this.node.x +=this.step;
        }else{
            this.node.x-=this.step;
        }
        if(this.audio !=null){
            cc.audioEngine.play(this.audio,false,1)
        }
        
    }

    // update (dt) {}
}
