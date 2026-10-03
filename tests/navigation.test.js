import test from 'node:test';
import assert from 'node:assert/strict';
import {bindMenuEscape} from '../src/navigation.js';

function press(target, key) {
  const event = new Event('keydown', {cancelable:true});
  Object.defineProperty(event, 'key', {value:key});
  target.dispatchEvent(event);
  return event;
}

test('Escape closes an open menu and restores toggle focus', () => {
  const target = new EventTarget(), calls = [];
  const cleanup = bindMenuEscape(target, () => calls.push('close'), () => calls.push('focus'));
  assert.equal(press(target, 'Escape').defaultPrevented, true);
  assert.deepEqual(calls, ['close','focus']);
  cleanup();
});

test('other keys keep normal navigation behaviour', () => {
  const target = new EventTarget();
  const cleanup = bindMenuEscape(target, () => assert.fail('unexpected close'), () => assert.fail('unexpected focus'));
  for (const key of ['Tab','Enter',' ','ArrowDown']) assert.equal(press(target,key).defaultPrevented,false);
  cleanup();
});

test('cleanup removes the old Escape handler', () => {
  const target = new EventTarget();
  const cleanup = bindMenuEscape(target, () => assert.fail('stale handler'), () => assert.fail('stale focus'));
  cleanup();
  assert.equal(press(target,'Escape').defaultPrevented,false);
});
