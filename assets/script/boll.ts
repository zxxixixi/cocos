// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on('touchstart',this.onclicked,this)
    }

    start () {

    }
    onclicked(){
        let h:number =300;
        cc.tween(this.node)
            .by(0.5,{position:cc.v3(0,-h,0)},{easing:'quardIn'}) //加速下落
            .by(0.2,{position:cc.v3(0,h/6,0)},{easing:'quardOut'}) //反弹 减速 上升
            .by(0.2,{position:cc.v3(0,-h/6,0)},{easing:'quardIn'})  //在下将
            .start()
    }

    // update (dt) {}
}
