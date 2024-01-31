import { d as y, l as c, o as x, v as S, w as o, h as i, a as s, n as t, b as a, f as l, g as k, p as E, j, _ as w } from './index-jt5A6YvX.js'
import { T as n } from './Table--ZUwi-5c.js'
import { F as A, E as I } from './Footer-pA9vZmAn.js'
import { p as r } from './EsMenu-DaP7wCVq.js'
const B = 'assets/house-1iBelA_I.jpg',
  p = (d) => (E('data-v-e1d754da'), (d = d()), j(), d),
  T = p(() => s('img', { class: 'avatar', src: B, alt: 'house' }, null, -1)),
  N = p(() =>
    s(
      'div',
      { class: 'description' },
      [
        s('p', null, '描述: 这座别墅宛如山中明珠，矗立于海的怀抱。'),
        s('p', null, '地址: 宇宙银河系地球'),
        s('p', null, '价格: $999999999'),
        s('p', null, '了解更多->'),
      ],
      -1,
    ),
  ),
  P = `
<template>
  <EsCard :card-style="{ padding: 0, overflow: 'hidden' }">
    <img class="avatar" src="../../assets/house.jpg" alt="house" />

    <div class="description">
      <p>描述: 这座别墅宛如山中明珠，矗立于海的怀抱。</p>
      <p>地址: 宇宙银河系地球</p>
      <p>价格: $999999999</p>
      <p>了解更多-></p>
    </div>
  </EsCard>
</template>
`,
  D = y({
    name: 'CardPage',
    __name: 'index',
    setup(d) {
      const u = c([
          { label: '属性名', key: 'name' },
          { label: '说明', key: 'explain' },
          { label: '类型', key: 'type' },
          { label: '默认值', key: 'value' },
        ]),
        m = c([
          { title: 'Card 卡片', id: 'card' },
          { title: '基本使用', id: 'base-card' },
          {
            title: 'API',
            id: 'card-api',
            part: [
              { label: 'Attributes', id: 'card-attributes' },
              { label: 'Slots', id: 'card-slots' },
            ],
          },
        ]),
        h = c([
          { name: 'cardClass', explain: '自定义card类名', type: 'string', value: '-' },
          { name: 'cardStyle', explain: '自定义card样式', type: 'object', value: '-' },
        ]),
        v = c([
          { label: '插槽名', key: 'name' },
          { label: '说明', key: 'explain' },
        ]),
        _ = c([{ name: 'default', explain: '自定义插槽内容' }]),
        { b, e } = k('content')
      return (F, V) => {
        const g = i('EsCard'),
          f = i('highlightjs'),
          C = i('EsScrollBar')
        return (
          x(),
          S(C, null, {
            default: o(() => [
              s(
                'div',
                { class: t(a(b)()) },
                [
                  s(
                    'div',
                    { class: t(a(e)('container')) },
                    [
                      s(
                        'div',
                        { class: t(a(e)('section')) },
                        [
                          s('h1', { id: 'card', class: t([a(e)('title'), a(e)('headline')]) }, 'Card 卡片', 2),
                          s('p', { class: t(a(e)('text')) }, '卡片包含内容和操作。', 2),
                        ],
                        2,
                      ),
                      s(
                        'div',
                        { class: t(a(e)('section')) },
                        [
                          s('h2', { id: 'base-card', class: t([a(e)('title'), a(e)('headline')]) }, '基本用法', 2),
                          s(
                            'div',
                            { class: t(a(e)('play')) },
                            [
                              s(
                                'div',
                                { class: t(a(e)('finished-product')) },
                                [l(g, { 'card-style': { padding: 0, overflow: 'hidden' } }, { default: o(() => [T, N]), _: 1 })],
                                2,
                              ),
                              l(f, { language: 'javascript', code: P }),
                            ],
                            2,
                          ),
                        ],
                        2,
                      ),
                      s(
                        'div',
                        { class: t(a(e)('section')) },
                        [s('h2', { id: 'card-api', class: t([a(e)('title'), a(e)('headline')]) }, 'API', 2)],
                        2,
                      ),
                      s(
                        'div',
                        { class: t(a(e)('section')) },
                        [
                          s('h2', { id: 'card-attributes', class: t([a(e)('title'), a(e)('headline')]) }, 'Attributes', 2),
                          l(n, { columns: u.value, data: h.value }, null, 8, ['columns', 'data']),
                        ],
                        2,
                      ),
                      s(
                        'div',
                        { class: t(a(e)('section')) },
                        [
                          s('h2', { id: 'card-slots', class: t([a(e)('title'), a(e)('headline')]) }, 'Slots', 2),
                          l(n, { columns: v.value, data: _.value }, null, 8, ['columns', 'data']),
                        ],
                        2,
                      ),
                      l(A, { last: { label: 'Switch 开关', path: a(r)('switch') }, next: { label: 'Tag 标签', path: a(r)('tag') } }, null, 8, [
                        'last',
                        'next',
                      ]),
                    ],
                    2,
                  ),
                  s('div', { class: t(a(e)('nav')) }, [l(I, { items: m.value }, null, 8, ['items'])], 2),
                ],
                2,
              ),
            ]),
            _: 1,
          })
        )
      }
    },
  }),
  G = w(D, [['__scopeId', 'data-v-e1d754da']])
export { G as default }