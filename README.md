# element-ui-el-table-draggable

[![CircleCI](https://circleci.com/gh/WakuwakuP/element-ui-el-table-draggable.svg?style=svg)](https://circleci.com/gh/WakuwakuP/element-ui-el-table-draggable)

Make 'el-table' of 'element UI' sortable.

## Installation

```
$ npm i -save element-ui-el-table-draggable
```

## Quick Start

```js
import ElTableDraggable from 'element-ui-el-table-draggable';

new Vue({
  components: {
    ElTableDraggable,
  },
});
```

```html
<el-table-draggable>
  <el-table>
    ......
  </el-table>
</el-table-draggable>
```

## Options

### handle

Make a draggable part.
You can drag only the specified class.

```html
<el-table-draggable handle=".handle">
  <el-table>
    <el-table-column>
      <template slot-scope="scope">
        <div class="handle">
          handle
        </div>
      </template>
    </el-table-column>
    ......
  </el-table>
</el-table-draggable>
```

### animate

Specify animation speed (ms).

```html
<el-table-draggable animate="300">
  <el-table>
    ......
  </el-table>
</el-table-draggable>
```

## Contribution

Please make sure to read the contributing guide ([日本語](CONTRIBUTING-jp.md) | [English](CONTRIBUTING.md)) before making a pull request.
