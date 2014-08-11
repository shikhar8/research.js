// Include the minisat.js file.
// http://stackoverflow.com/a/5809968
var Module = require('./build/boolector.js')

// Testing function.
var solve_string = Module.cwrap('solve_string', 'string', ['string', 'number']);
function test(problem, format, expected) {
  console.log('Trying to solve: ' + problem);
  var result = solve_string(problem, format);
  console.log('Got: ' + result);
  console.log('Expected: ' + expected);
}

// Tiny testcase.
test('(benchmark bgpd_bgpd_vc75770.smt\n:logic QF_BV\n:extrafuns ((x BitVec[1]))\n:extrafuns ((y BitVec[1]))\n:assumption (= x y))', 1, 'SAT');
test('(benchmark bgpd_bgpd_vc75770.smt\n:logic QF_BV\n:extrafuns ((x BitVec[1]))\n:extrafuns ((y BitVec[1]))\n:extrafuns ((z BitVec[1]))\n:assumption (= x y)\n:assumption (= y z)\n:assumption (not (= x z)))', 1, 'UNSAT');
// Larger testcases
test('(benchmark bgpd_bgpd_vc75770.smt\n  :source {\nBenchmarks generated by the Calysto static checker.  Provided by Domagoj\nBabic.  See http://www.cs.ubc.ca/~babic/index_benchmarks.htm.  Translated using\nSpear Sf2Smt translator.\n\n}\n  :status sat\n  :difficulty { 1 }\n  :category { industrial }\n  :logic QF_BV\n  :extrafuns ((v155383228 BitVec[32]))\n  :extrafuns ((v123355396 BitVec[32]))\n  :extrafuns ((o135329240 BitVec[1]))\n  :extrafuns ((v112166284 BitVec[64]))\n  :extrafuns ((v120278848 BitVec[64]))\n  :extrafuns ((o126362052 BitVec[64]))\n  :extrafuns ((o111864348 BitVec[64]))\n  :extrafuns ((o126831404 BitVec[64]))\n  :extrafuns ((o115291336 BitVec[1]))\n  :extrafuns ((o109592516 BitVec[1]))\n  :extrafuns ((o126395976 BitVec[1]))\n  :extrafuns ((o113736064 BitVec[1]))\n  :extrafuns ((o136580064 BitVec[1]))\n  :extrafuns ((o132551304 BitVec[1]))\n  :extrafuns ((o133445212 BitVec[1]))\n  :extrafuns ((o129788248 BitVec[1]))\n  :extrafuns ((o126242516 BitVec[1]))\n  :extrafuns ((v128577852 BitVec[32]))\n  :extrafuns ((o121580388 BitVec[32]))\n  :extrafuns ((o125050112 BitVec[1]))\n  :extrafuns ((o132528424 BitVec[1]))\n  :extrafuns ((Fresh__0 BitVec[1]))\n  :extrafuns ((Fresh__1 BitVec[1]))\n  :extrafuns ((Fresh__2 BitVec[1]))\n  :extrafuns ((Fresh__3 BitVec[1]))\n  :extrafuns ((Fresh__4 BitVec[1]))\n  :extrafuns ((Fresh__5 BitVec[1]))\n  :extrafuns ((Fresh__6 BitVec[1]))\n  :extrafuns ((Fresh__7 BitVec[1]))\n  :assumption\n(iff (= Fresh__0 bv1[1]) (bvslt v155383228 v123355396))\n  :assumption\n(= o135329240 Fresh__0)\n  :assumption\n(= o126362052 (bvsdiv v112166284 v120278848))\n  :assumption\n(= o111864348 (bvmul o126362052 (extract[63:0] bv5[64])))\n  :assumption\n(= o126831404 (ite (= o135329240 bv1[1]) o111864348 (extract[63:0] bv0[64])))\n  :assumption\n(iff (= Fresh__1 bv1[1]) (bvsle (extract[63:0] bv86400[64]) o126831404))\n  :assumption\n(= o115291336 Fresh__1)\n  :assumption\n(iff (= Fresh__2 bv1[1]) (distinct o126831404  (extract[63:0] bv0[64]) ))\n  :assumption\n(= o109592516 Fresh__2)\n  :assumption\n(iff (= Fresh__3 bv1[1]) (bvsle v123355396 v155383228))\n  :assumption\n(= o126395976 Fresh__3)\n  :assumption\n(= o113736064 (bvand o126395976 (extract[0:0] bv1[64])))\n  :assumption\n(= o136580064 (ite (= o135329240 bv1[1]) (extract[0:0] bv1[64]) o113736064))\n  :assumption\n(= o132551304 (bvand o109592516 o136580064))\n  :assumption\n(= o133445212 (bvand o115291336 o132551304))\n  :assumption\n(iff (= Fresh__4 bv1[1]) (bvslt o126831404 (extract[63:0] bv604800[64])))\n  :assumption\n(= o129788248 Fresh__4)\n  :assumption\n(= o126242516 (bvand o133445212 o129788248))\n  :assumption\n(= o121580388 (ite (= o135329240 bv1[1]) v128577852 (extract[31:0] bv0[64])))\n  :assumption\n(iff (= Fresh__5 bv1[1]) (distinct (extract[31:0] bv0[64])  o121580388 ))\n  :assumption\n(= o125050112 Fresh__5)\n  :assumption\n(iff (= Fresh__6 bv1[1]) (implies (= o126242516 bv1[1]) (= o125050112 bv1[1])))\n  :assumption\n(= o132528424 Fresh__6)\n  :assumption\n(iff (= Fresh__7 bv1[1]) (= (extract[0:0] bv0[64]) o132528424))\n  :assumption\n(= bv1[1] Fresh__7)\n)\n', 1, 'SAT')
test("(set-logic QF_BV)\n(set-info :source |\nBenchmarks generated by the Calysto static checker.  Provided by Domagoj\nBabic.  See http://www.cs.ubc.ca/~babic/index_benchmarks.htm.  Translated using\nSpear Sf2Smt translator.\n\n|)\n(set-info :smt-lib-version 2.0)\n(set-info :status unsat)\n(declare-fun v228793356 () (_ BitVec 32))\n(declare-fun o185363664 () (_ BitVec 32))\n(declare-fun v175256648 () (_ BitVec 32))\n(declare-fun o107859944 () (_ BitVec 1))\n(declare-fun v195883068 () (_ BitVec 64))\n(declare-fun o167951648 () (_ BitVec 1))\n(declare-fun o220953668 () (_ BitVec 1))\n(declare-fun o136801376 () (_ BitVec 1))\n(declare-fun o118462720 () (_ BitVec 1))\n(declare-fun o165916888 () (_ BitVec 1))\n(declare-fun v108404072 () (_ BitVec 32))\n(declare-fun o169220256 () (_ BitVec 1))\n(declare-fun v134240016 () (_ BitVec 32))\n(declare-fun v116112088 () (_ BitVec 32))\n(declare-fun o135414636 () (_ BitVec 32))\n(declare-fun o166137632 () (_ BitVec 1))\n(declare-fun o92895272 () (_ BitVec 1))\n(declare-fun v106171004 () (_ BitVec 32))\n(declare-fun o93535228 () (_ BitVec 1))\n(declare-fun o152899792 () (_ BitVec 1))\n(declare-fun v130089812 () (_ BitVec 8))\n(declare-fun o184958212 () (_ BitVec 1))\n(declare-fun o128311728 () (_ BitVec 1))\n(declare-fun v120662324 () (_ BitVec 32))\n(declare-fun o118945128 () (_ BitVec 1))\n(declare-fun v135800248 () (_ BitVec 32))\n(declare-fun o105872728 () (_ BitVec 64))\n(declare-fun o219826328 () (_ BitVec 1))\n(declare-fun o150789200 () (_ BitVec 1))\n(declare-fun o181143708 () (_ BitVec 1))\n(declare-fun o97007644 () (_ BitVec 1))\n(declare-fun o121292948 () (_ BitVec 1))\n(declare-fun o163053596 () (_ BitVec 1))\n(declare-fun o154460332 () (_ BitVec 1))\n(declare-fun v130616544 () (_ BitVec 32))\n(declare-fun o210222636 () (_ BitVec 1))\n(declare-fun v171991188 () (_ BitVec 1))\n(declare-fun o147976328 () (_ BitVec 1))\n(declare-fun o197151532 () (_ BitVec 1))\n(declare-fun o102431384 () (_ BitVec 1))\n(declare-fun o188714900 () (_ BitVec 1))\n(declare-fun o163695808 () (_ BitVec 1))\n(declare-fun v119462036 () (_ BitVec 32))\n(declare-fun o136549916 () (_ BitVec 1))\n(declare-fun o167116348 () (_ BitVec 1))\n(declare-fun v140076060 () (_ BitVec 32))\n(declare-fun o231235812 () (_ BitVec 1))\n(declare-fun o136236148 () (_ BitVec 1))\n(declare-fun v220556808 () (_ BitVec 32))\n(declare-fun o229756708 () (_ BitVec 1))\n(declare-fun o155770628 () (_ BitVec 1))\n(declare-fun v208078612 () (_ BitVec 32))\n(declare-fun o158044372 () (_ BitVec 1))\n(declare-fun o178440964 () (_ BitVec 1))\n(declare-fun o167120532 () (_ BitVec 1))\n(declare-fun o119500664 () (_ BitVec 1))\n(declare-fun o227098600 () (_ BitVec 1))\n(declare-fun o216599792 () (_ BitVec 1))\n(declare-fun Fresh__0 () (_ BitVec 1))\n(declare-fun Fresh__1 () (_ BitVec 1))\n(declare-fun Fresh__2 () (_ BitVec 1))\n(declare-fun Fresh__3 () (_ BitVec 1))\n(declare-fun Fresh__4 () (_ BitVec 1))\n(declare-fun Fresh__5 () (_ BitVec 1))\n(declare-fun Fresh__6 () (_ BitVec 1))\n(declare-fun Fresh__7 () (_ BitVec 1))\n(declare-fun Fresh__8 () (_ BitVec 1))\n(declare-fun Fresh__9 () (_ BitVec 1))\n(declare-fun Fresh__10 () (_ BitVec 1))\n(declare-fun Fresh__11 () (_ BitVec 1))\n(declare-fun Fresh__12 () (_ BitVec 1))\n(declare-fun Fresh__13 () (_ BitVec 1))\n(declare-fun Fresh__14 () (_ BitVec 1))\n(declare-fun Fresh__15 () (_ BitVec 1))\n(declare-fun Fresh__16 () (_ BitVec 1))\n(declare-fun Fresh__17 () (_ BitVec 1))\n(declare-fun Fresh__18 () (_ BitVec 1))\n(declare-fun Fresh__19 () (_ BitVec 1))\n(declare-fun Fresh__20 () (_ BitVec 1))\n(declare-fun Fresh__21 () (_ BitVec 1))\n(assert (= o185363664 (bvadd ((_ extract 31 0) (_ bv1 64)) v228793356)))\n(assert (= (= Fresh__0 (_ bv1 1)) (bvult o185363664 v175256648)))\n(assert (= o107859944 Fresh__0))\n(assert (= (= Fresh__1 (_ bv1 1)) (distinct v195883068 ((_ extract 63 0) (_ bv0 64)))))\n(assert (= o167951648 Fresh__1))\n(assert (= o220953668 (bvand o167951648 ((_ extract 0 0) (_ bv1 64)))))\n(assert (= (= Fresh__2 (_ bv1 1)) (bvule v175256648 o185363664)))\n(assert (= o136801376 Fresh__2))\n(assert (= o118462720 (bvand o220953668 o136801376)))\n(assert (= o165916888 (bvand o107859944 o118462720)))\n(assert (= (= Fresh__3 (_ bv1 1)) (= v108404072 ((_ extract 31 0) (_ bv0 64)))))\n(assert (= o169220256 Fresh__3))\n(assert (= o135414636 (ite (= o169220256 (_ bv1 1)) v134240016 v116112088)))\n(assert (= (= Fresh__4 (_ bv1 1)) (= o135414636 ((_ extract 31 0) (_ bv0 64)))))\n(assert (= o166137632 Fresh__4))\n(assert (= o92895272 (bvand ((_ extract 0 0) (_ bv1 64)) o166137632)))\n(assert (= (= Fresh__5 (_ bv1 1)) (distinct ((_ extract 31 0) (_ bv0 64)) v106171004)))\n(assert (= o93535228 Fresh__5))\n(assert (= o152899792 (bvand ((_ extract 0 0) (_ bv1 64)) o93535228)))\n(assert (= (= Fresh__6 (_ bv1 1)) (distinct ((_ extract 7 0) (_ bv0 64)) v130089812)))\n(assert (= o184958212 Fresh__6))\n(assert (= o128311728 (bvand o152899792 o184958212)))\n(assert (= (= Fresh__7 (_ bv1 1)) (= ((_ extract 31 0) (_ bv0 64)) v120662324)))\n(assert (= o118945128 Fresh__7))\n(assert (= o105872728 ((_ sign_extend 32) v135800248)))\n(assert (= (= Fresh__8 (_ bv1 1)) (bvslt o105872728 ((_ extract 63 0) (_ bv0 64)))))\n(assert (= o219826328 Fresh__8))\n(assert (= (= Fresh__9 (_ bv1 1)) (distinct ((_ extract 31 0) (_ bv0 64)) v120662324)))\n(assert (= o150789200 Fresh__9))\n(assert (= o181143708 (bvand o150789200 ((_ extract 0 0) (_ bv1 64)))))\n(assert (= (= Fresh__10 (_ bv1 1)) (bvsle ((_ extract 63 0) (_ bv0 64)) o105872728)))\n(assert (= o97007644 Fresh__10))\n(assert (= o121292948 (bvand o181143708 o97007644)))\n(assert (= o163053596 (ite (= o219826328 (_ bv1 1)) ((_ extract 0 0) (_ bv1 64)) o121292948)))\n(assert (= o154460332 (ite (= o118945128 (_ bv1 1)) ((_ extract 0 0) (_ bv1 64)) o163053596)))\n(assert (= (= Fresh__11 (_ bv1 1)) (distinct ((_ extract 31 0) (_ bv0 64)) v130616544)))\n(assert (= o210222636 Fresh__11))\n(assert (= o147976328 (bvxor ((_ extract 0 0) (_ bv1 64)) v171991188)))\n(assert (= o197151532 (bvand o147976328 ((_ extract 0 0) (_ bv1 64)))))\n(assert (= o102431384 (bvand o210222636 o197151532)))\n(assert (= o188714900 (bvand o154460332 o102431384)))\n(assert (= o163695808 (bvand o188714900 ((_ extract 0 0) (_ bv1 64)))))\n(assert (= (= Fresh__12 (_ bv1 1)) (= ((_ extract 31 0) (_ bv0 64)) v119462036)))\n(assert (= o136549916 Fresh__12))\n(assert (= o167116348 (bvand ((_ extract 0 0) (_ bv1 64)) o136549916)))\n(assert (= (= Fresh__13 (_ bv1 1)) (distinct ((_ extract 31 0) (_ bv0 64)) v140076060)))\n(assert (= o231235812 Fresh__13))\n(assert (= o136236148 (bvand o167116348 o231235812)))\n(assert (= (= Fresh__14 (_ bv1 1)) (= ((_ extract 31 0) (_ bv0 64)) v220556808)))\n(assert (= o229756708 Fresh__14))\n(assert (= o155770628 (bvand o136236148 o229756708)))\n(assert (= (= Fresh__15 (_ bv1 1)) (distinct v208078612 ((_ extract 31 0) (_ bv0 64)))))\n(assert (= o158044372 Fresh__15))\n(assert (= (= Fresh__16 (_ bv1 1)) (=> (= o155770628 (_ bv1 1)) (= o158044372 (_ bv1 1)))))\n(assert (= o178440964 Fresh__16))\n(assert (= (= Fresh__17 (_ bv1 1)) (=> (= o163695808 (_ bv1 1)) (= o178440964 (_ bv1 1)))))\n(assert (= o167120532 Fresh__17))\n(assert (= (= Fresh__18 (_ bv1 1)) (=> (= o128311728 (_ bv1 1)) (= o167120532 (_ bv1 1)))))\n(assert (= o119500664 Fresh__18))\n(assert (= (= Fresh__19 (_ bv1 1)) (=> (= o92895272 (_ bv1 1)) (= o119500664 (_ bv1 1)))))\n(assert (= o227098600 Fresh__19))\n(assert (= (= Fresh__20 (_ bv1 1)) (=> (= o165916888 (_ bv1 1)) (= o227098600 (_ bv1 1)))))\n(assert (= o216599792 Fresh__20))\n(assert (= (= Fresh__21 (_ bv1 1)) (= ((_ extract 0 0) (_ bv0 64)) o216599792)))\n(assert (= (_ bv1 1) Fresh__21))\n(check-sat)\n(exit)\n", 2, "UNSAT")