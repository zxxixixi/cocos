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

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on('mousedown',this.onClicked,this)
    }

    start () {

    }
    onClicked(){
        let node:cc.Node=cc.find('Canvas/2519d80e4bee8ccc/tiao')
        node.setPosition(0,-200)
    }
    // update (dt) {}
}
