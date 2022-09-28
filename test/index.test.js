const { testElement } = require("domutils");

const htmlDump = `
<div class="page page-archive -top">

        <div class="content__title">Pastes Archive</div>

        <div class="content__text">
            <div class="notice -no-margin">
                                    This page contains the most recently created 'public' pastes.                            </div>
        </div>

        <div class="archive-table">
            <div data-key="158308569">
</div><div data-key="158308255">
</div><div data-key="158306589">
</div><div data-key="158306564">
</div><div data-key="158306465">
</div><div data-key="158305886">
</div><div data-key="158305569">
</div><div data-key="158305283">
</div><div data-key="158304702">
</div><div data-key="158304623">
</div><div data-key="158304565">
</div><div data-key="158304326">
</div><div data-key="158304309">
</div><div data-key="158304266">
</div><div data-key="158304223">
</div><div data-key="158304221">
</div><div data-key="158304203">
</div><div data-key="158304193">
</div><div data-key="158304154">
</div><div data-key="158303965">
</div><div data-key="158303729">
</div><div data-key="158303637">
</div><div data-key="158303521">
</div><div data-key="158303447">
</div><div data-key="158303339">
</div><div data-key="158303257">
</div><div data-key="158303191">
</div><div data-key="158303159">
</div><div data-key="158302884">
</div><div data-key="158302749">
</div><div data-key="158302735">
</div><div data-key="158302298">
</div><div data-key="158301895">
</div><div data-key="158301752">
</div><div data-key="158300520">
</div><div data-key="158300306">
</div><div data-key="158300155">
</div><div data-key="158300148">
</div><div data-key="158300083">
</div><div data-key="158299710">
</div><div data-key="158299382">
</div><div data-key="158299152">
</div><div data-key="158298731">
</div><div data-key="158298654">
</div><div data-key="158298611">
</div><div data-key="158298502">
</div><div data-key="158298457">
</div><div data-key="158298383">
</div><div data-key="158298091">
</div><div data-key="158297976">
</div><table class="maintable">
                <tbody>
                    <tr>
                        <th scope="col">Name / Title</th>
                        <th scope="col" class="h_800 td_right">Posted</th>
                        <th scope="col" class="h_800 td_right">Syntax</th>
                    </tr>

                    <tr>
    <td><span class="status -public"></span><a href="/6ryvL9V2">AuthGuard</a></td>
    <td class="td_smaller h_800 td_right">11 sec ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/typescript">TypeScript</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/jWHZjpCC">grid paths</a></td>
    <td class="td_smaller h_800 td_right">25 min ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/rust">Rust</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/Lg2LV0a0">fdsafsd</a></td>
    <td class="td_smaller h_800 td_right">2 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/bash">Bash</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/pJEPaduj">Untitled</a></td>
    <td class="td_smaller h_800 td_right">2 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/python">Python</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/tLzMNWyR">Nordpool pumba käivitamine</a></td>
    <td class="td_smaller h_800 td_right">2 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/yaml">YAML</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/a6VXSeKQ">Ejercicio6Tp1</a></td>
    <td class="td_smaller h_800 td_right">2 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/java">Java</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/i1ZtLukv">Outsider Rodeo  Outsider Rodeo - Raise A Suilen  | HoatHinh.tv | GtKKuQW1wH...</a></td>
    <td class="td_smaller h_800 td_right">3 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/html5">HTML 5</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/R8aC8B2w">Hạt Nắng Vỡ Đôi  Hạt Nắng Vỡ Đôi - Vanh, Phạm Nguyên Ngọc, BMZ  | HoatHinh....</a></td>
    <td class="td_smaller h_800 td_right">3 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/html5">HTML 5</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/ALtxV3HX">printf</a></td>
    <td class="td_smaller h_800 td_right">3 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/c">C</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/8CTbiAN8">windows11-ryzen5800x-libvirt-xml-7-AVIC+HV+SecureBoot</a></td>
    <td class="td_smaller h_800 td_right">3 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/xml">XML</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/rtzLFs79">$ rotating 3D cube</a></td>
    <td class="td_smaller h_800 td_right">3 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/javascript">JavaScript</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/M8yBdb1G">My Story  My Story - Black T  | HoatHinh.tv | AMKk8roczHmW</a></td>
    <td class="td_smaller h_800 td_right">4 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/html5">HTML 5</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/mRmGTD2F">STUPID FRACTALS GRR</a></td>
    <td class="td_smaller h_800 td_right">4 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/cpp">C++</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/KNCi0k6u">Untitled</a></td>
    <td class="td_smaller h_800 td_right">4 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/lua">Lua</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/7w2YU1MM">Untitled</a></td>
    <td class="td_smaller h_800 td_right">4 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/css">CSS</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/5na6Cjtf">My Story Beat  My Story Beat - Black T  | HoatHinh.tv | E9OIe7UbSDAG</a></td>
    <td class="td_smaller h_800 td_right">4 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/html5">HTML 5</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/tKFPMSbt">$ minimalistic 3d game engine in javascript</a></td>
    <td class="td_smaller h_800 td_right">4 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/javascript">JavaScript</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/5MHLirRH">4.3.4</a></td>
    <td class="td_smaller h_800 td_right">4 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/python">Python</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/vRH9eg8B">Untitled</a></td>
    <td class="td_smaller h_800 td_right">4 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/python">Python</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/kZu3vbTQ">Oh Ai Nói Hay Beat  Oh Ai Nói Hay Beat - SuDra  | HoatHinh.tv | WPW9wLYwIcT...</a></td>
    <td class="td_smaller h_800 td_right">4 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/html5">HTML 5</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/FzQhcKrK">Untitled</a></td>
    <td class="td_smaller h_800 td_right">4 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/java">Java</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/c2gqdwvA">Untitled</a></td>
    <td class="td_smaller h_800 td_right">4 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/csharp">C#</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/yQstUQG8">Untitled</a></td>
    <td class="td_smaller h_800 td_right">4 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/csharp">C#</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/06AGScaB">Untitled</a></td>
    <td class="td_smaller h_800 td_right">4 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/csharp">C#</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/RrVsbU7d">Untitled</a></td>
    <td class="td_smaller h_800 td_right">5 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/csharp">C#</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/MUS5uCqY">Untitled</a></td>
    <td class="td_smaller h_800 td_right">5 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/java">Java</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/wGxq3QXd">Untitled</a></td>
    <td class="td_smaller h_800 td_right">5 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/python">Python</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/vpQjht8h">Untitled</a></td>
    <td class="td_smaller h_800 td_right">5 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/cpp">C++</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/MiFbFKLW">Untitled</a></td>
    <td class="td_smaller h_800 td_right">5 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/python">Python</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/g1ktiE0a">DigitalMinerServer</a></td>
    <td class="td_smaller h_800 td_right">5 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/lua">Lua</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/C8xWu9tp">Untitled</a></td>
    <td class="td_smaller h_800 td_right">5 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/javascript">JavaScript</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/fRZtu9D6">sqlhack#3</a></td>
    <td class="td_smaller h_800 td_right">5 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/mysql">MySQL</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/FtfiqLJt">convert-and-redirect-t.me-to-telegram.me.user.js</a></td>
    <td class="td_smaller h_800 td_right">6 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/javascript">JavaScript</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/pNZyBaCu">EdD-TP01-EJ5y6</a></td>
    <td class="td_smaller h_800 td_right">6 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/java">Java</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/K763A3XL">Hiro</a></td>
    <td class="td_smaller h_800 td_right">7 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/powershell">PowerShell</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/HKdw64uE">Find all combinations 2</a></td>
    <td class="td_smaller h_800 td_right">7 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/javascript">JavaScript</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/uHWpBD7k">Untitled</a></td>
    <td class="td_smaller h_800 td_right">7 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/javascript">JavaScript</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/BSwFd2cD">soma finita representando o sinal x(t)</a></td>
    <td class="td_smaller h_800 td_right">7 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/cpp">C++</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/gy7ieEUy">Lyndon - Duval</a></td>
    <td class="td_smaller h_800 td_right">7 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/cpp">C++</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/xrZKK2qF">All combinations</a></td>
    <td class="td_smaller h_800 td_right">7 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/javascript">JavaScript</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/CDjFp4m8">morelettersinc.1.solve.js</a></td>
    <td class="td_smaller h_800 td_right">8 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/javascript">JavaScript</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/ajNLpHLY">Cha Mẹ À  Cha Mẹ À - Isaac Thái  | HoatHinh.tv | g4m3ORUiILpK</a></td>
    <td class="td_smaller h_800 td_right">8 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/html5">HTML 5</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/Re56JWxU">Horror game plans</a></td>
    <td class="td_smaller h_800 td_right">8 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/lua">Lua</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/UbafgynB">Godot Map/Lerp a Range of numbers</a></td>
    <td class="td_smaller h_800 td_right">8 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/godot-glsl">Godot GLSL</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/QtHSDgvt">AgricraftPlantBreeder</a></td>
    <td class="td_smaller h_800 td_right">8 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/lua">Lua</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/yrYbMmzx">Thi Thiên 1  Thi Thiên 1 - Isaac Thái  | HoatHinh.tv | YHRXdo18aCiW</a></td>
    <td class="td_smaller h_800 td_right">8 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/html5">HTML 5</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/RpXsf3jS">Untitled</a></td>
    <td class="td_smaller h_800 td_right">8 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/java">Java</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/0GuZ7L6c">Thi Thiên 1 (Beat)  Thi Thiên 1 (Beat) - Isaac Thái  | HoatHinh.tv | f1pxPF...</a></td>
    <td class="td_smaller h_800 td_right">8 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/html5">HTML 5</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/rVdrS7tD">Untitled</a></td>
    <td class="td_smaller h_800 td_right">9 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/javascript">JavaScript</a></td></tr>
<tr>
    <td><span class="status -public"></span><a href="/nVRacL7y">authorization&amp;Authentication</a></td>
    <td class="td_smaller h_800 td_right">9 hours ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/python">Python</a></td></tr>
                </tbody>
            </table>
        </div>
    </div>
`

const htmlTableLiteDump = `
<div class="page page-archive -top">

        <div class="content__title">Pastes Archive</div>

        <div class="content__text">
            <div class="notice -no-margin">
                                    This page contains the most recently created 'public' pastes.                            </div>
        </div>

        <div class="archive-table">
            <div data-key="158308569"></div>
            <div data-key="158308255"></div>
            <div data-key="158306589"></div>
            <div data-key="158306564"></div>
            <div data-key="158306465"></div>
            <table class="maintable">
                <tbody>
                    <tr>
                        <th scope="col">Name / Title</th>
                        <th scope="col" class="h_800 td_right">Posted</th>
                        <th scope="col" class="h_800 td_right">Syntax</th>
                    </tr>

                    <tr>
                        <td><span class="status -public"></span><a href="/6ryvL9V2">AuthGuard</a></td>
                        <td class="td_smaller h_800 td_right">11 sec ago</td>
                        <td class="td_smaller h_800 td_right"><a href="/archive/typescript">TypeScript</a></td></tr>
                    <tr>
                        <td><span class="status -public"></span><a href="/jWHZjpCC">grid paths</a></td>
                        <td class="td_smaller h_800 td_right">25 min ago</td>
                        <td class="td_smaller h_800 td_right"><a href="/archive/rust">Rust</a></td></tr>
                    <tr>
                        <td><span class="status -public"></span><a href="/Lg2LV0a0">fdsafsd</a></td>
                        <td class="td_smaller h_800 td_right">2 hours ago</td>
                        <td class="td_smaller h_800 td_right"><a href="/archive/bash">Bash</a></td></tr>
                    <tr>
                        <td><span class="status -public"></span><a href="/pJEPaduj">Untitled</a></td>
                        <td class="td_smaller h_800 td_right">2 hours ago</td>
                        <td class="td_smaller h_800 td_right"><a href="/archive/python">Python</a></td></tr>
                    </tbody>
            </table>
        </div>
    </div>
`

const htmlTdDump = `
<table>
<tr>
    <td><span class="status -public"></span><a href="/6ryvL9V2">AuthGuard</a></td>
    <td class="td_smaller h_800 td_right">11 sec ago</td>
    <td class="td_smaller h_800 td_right"><a href="/archive/typescript">TypeScript</a></td></tr>
<tr>
</table>
`

const cheerio = require('cheerio');
const { parseIndexPage, parseItem } = require('../index')

describe("Parsing Lite", () => {
    test("Table", () => {
        const items = parseIndexPage(htmlTableLiteDump)

        expect(items.length).toEqual(4)
        expect(items.map(i=>(i.link))).toEqual(['/6ryvL9V2', '/jWHZjpCC', '/Lg2LV0a0', '/pJEPaduj'])
        expect(items).toMatchSnapshot();
    })

    test("Item", () => {
        const $ = cheerio.load(htmlTableLiteDump);
        const $tr = $('.archive-table .maintable tr');
        console.log($tr.html());
        const {link} = parseItem($, null, $tr)
        expect(link).toEqual('/6ryvL9V2')
    })  
  
    // expect(readme).toEqual(readmeWithRoot);
    // expect(readme).toMatchSnapshot();
  });