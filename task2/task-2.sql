with sub_levels (id, parent_id, sub_level) as 
(
select id, parent_id, 0 as sub_level from subdivisions where parent_id is null
union all
select s.id, s.parent_id, sl.sub_level + 1 from sub_levels as sl join subdivisions as s on sl.id = s.parent_id
)
select 
	c.id, 
	c.name, 
	c.age, 
	s.name as sub_name, 
	s.id as sub_id,
	sl.sub_level,
	(select COUNT(*)
		from collaborators as ic
		group by ic.subdivision_id
		having ic.subdivision_id=c.subdivision_id) as colls_count
from collaborators as c
	left join subdivisions as s on c.subdivision_id = s.id
	left join sub_levels as sl on s.id = sl.id
where s.id != 100055 and s.id != 100059 and c.age < 40